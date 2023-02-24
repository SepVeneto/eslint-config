#!/bin/bash

pnpm i --frozen-lockfile --registry=https://registry.npmmirror.com

pnpm -r publish --no-git-checks --access public