[![Build Status](https://travis-ci.org/BaReinhard/NODEJS-Math-API.png?branch=master)](https://travis-ci.org/BaReinhard/NODEJS-Math-API)

## NodeJS based Mathematics API

## Why a Math API?
* You probably noticed the root of the api had author details, and rather specifically articulated what company and position at the company was desired. This wasn't by coincidence but rather a large reason for the API. Aside from practicing API design, it was also meant to be created to help show what I was capable of implementing without any supervision.

## What technologies are involved?
* **Hosting:** You also probably noticed the URL including `herokuapp`, thats because it is now hosted on heroku. It was originally hosted on the Google Cloud Platform using Googles App Engine for a few weeks, this was largely inspired by the aforementioned possible internship position. The job posting mentioned the use of Googles App Engine, and I decided this would also be a good way to at least get an understanding of the GCP and GAE. Unfortunately, due to the costs of using GCP I was unable to continue to use the platform. Luckily, heroku is a free substitution and easily integrated from github and TravisCI.
* **CI:** It is also implementing TravisCI as you can tell by the `Build Status` png at the top of this README file. Given all tests pass, TravisCI will also deploy to the `gh-pages` branch and heroku will then deploy the latest changes.
* **Testing:** This project uses mocha for testing to ensure that functions behave the way we would expect before publishing.
* **Compilation/Transpilation:** Babel is used with the `babel-present-env` preset, this allows for the latest ES standards to be used during development, and allows for easy changes to the settings to deploy the code to different servers.