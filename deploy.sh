#!/bin/bash

npm i -f && \
npm i -g tsc tsc-alias && \
npm run build && \
npm prune --production

sls deploy