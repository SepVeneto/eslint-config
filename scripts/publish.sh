#!/bin/bash

cd packages
for pkg in ./*
do
cd ${pkg}
npm publish --no-git-checks --access public
cd -
done