#!/bin/bash

pnpm i --frozen-lockfile --registry=https://registry.npmmirror.com

pnpm -r publish --no-git-checks --access public

curl -X PUT https://registry-direct.npmmirror.com/@sepveneto/eslint-config/sync?sync_upstream=true
curl -X PUT https://registry-direct.npmmirror.com/@sepveneto/eslint-config-basic/sync?sync_upstream=true
curl -X PUT https://registry-direct.npmmirror.com/@sepveneto/eslint-config-mp/sync?sync_upstream=true
curl -X PUT https://registry-direct.npmmirror.com/@sepveneto/eslint-config-ts/sync?sync_upstream=true
curl -X PUT https://registry-direct.npmmirror.com/@sepveneto/eslint-config-vue/sync?sync_upstream=true