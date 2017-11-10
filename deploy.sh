#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd deploy

git init
git config user.name "Brett Reinhard"
git config user.email "brett@reinhards.us"

git remote add upstream "https://$GH_TOKEN@github.com/BaReinhard/NODEJS-Math-API.git"
git fetch upstream
git reset upstream/gh-pages


touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages