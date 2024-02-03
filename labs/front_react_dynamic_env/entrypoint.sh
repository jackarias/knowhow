#!/bin/sh -eu
./generate_env.sh > /usr/share/nginx/html/config.js
chmod +r /usr/share/nginx/html/config.js
nginx -g "daemon off;"
