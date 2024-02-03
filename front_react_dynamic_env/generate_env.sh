#!/bin/sh -eu
cat << EOF
window.REACT_APP_RANDOM_VAR='${A_RANDOM_ENV_VAR}';
EOF
