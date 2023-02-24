#!/bin/bash

cd packages
for pkg in ./*
do
cd ${pkg}
pnpm publish --no-git-checks --access public
cd -
done