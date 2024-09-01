const https = require('https');

const base_cloudflare_api_url = 'https://api.cloudflare.com/client/v4'
const api_actions = {
        verifyToken: { urlActionSuffix: '/user/tokens/verify'},
        listDnsZones: { urlActionSuffix: '/zones' }
};
const timeout = 5 * 1000; // 5 seconds
const selectedSuffix = api_actions[process.env.TASK].urlActionSuffix;
apiKey = `${process.env.API_KEY}`;

url = base_cloudflare_api_url.concat(selectedSuffix);

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
};

function makeRequest(attempt) {
  const agent = attempt > 1 ? new https.Agent({ keepAlive: false }) : undefined;

  return new Promise((resolve, reject) => {
    const req = https.request(url, requestOptions, res => {
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(data);
        } else {
          reject(new Error(`Request failed with status code ${res.statusCode}`));
        }
      });
    });

    req.on('error', error => {
      reject(error);
    });

    req.setTimeout(timeout, () => {
      req.abort();
      reject(new Error('Request timed out'));
    });

    req.end();
  });
}

async function main() {
  let attempts = 0;
  while (attempts < 3) {
    try {
      console.log('URL:', url);
      const response = await makeRequest(attempts++);
      console.log('Response:', JSON.stringify(response, null, 4));
      break;
    } catch (error) {
      console.error(`Attempt ${attempts} failed:`, error);
    }
  }
}

main();
