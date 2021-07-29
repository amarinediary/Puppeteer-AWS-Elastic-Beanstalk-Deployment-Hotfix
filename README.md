# Marionette
Puppeteer deployment folder for AWS Elastic Beanstalk (64bit Linux 2 Node.js 14 environment) using AWS/GitHub Code Pipeline.

Related to Puppeteer [troubleshooting](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md) documentation, [Running Puppeteer on AWS EC2 instance running Amazon-Linux](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-aws-ec2-instance-running-amazon-linux) and [Chrome is downloaded but fails to launch on Node.js 14](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-is-downloaded-but-fails-to-launch-on-nodejs-14) issues.

## Table of contents
- [Elastic Beanstalk environement](https://github.com/amarinediary/Marionette#elastic-beanstalk-environement)
- [Quick start](https://github.com/amarinediary/Marionette#quick-start)
- [`.npmrc` file](https://github.com/amarinediary/Marionette#npmrc-file)
- [`.ebextensions` folder](https://github.com/amarinediary/Marionette#ebextensions-folder)
- [Deployment folder structure](https://github.com/amarinediary/Marionette#deployment-folder-structure)
- [Related GitHub Puppeteer tickets](https://github.com/amarinediary/Marionette#related-github-puppeteer-tickets)

## Elastic Beanstalk environement
|-|Parameters|
|-|-|
|Platform|`Node.js`|
|Platform branch|`Node.js 14 running on 64bit Amazon Linux 2`|
|Platform version|`5.4.3 (Recommended)`|

## Quick start
Download the repository, and use it as your deployement folder:

1. `git clone https://github.com/amarinediary/Marionette.git`

Initiate your new project and install dependencies:

2. `npm init --yes`
3. `npm i puppeteer --save`

## `.npmrc` file
The `.npmrc` file defines how npm should behave when running commands. Setting `unsafe-perm` to true suppress the UID/GID switching when running package scripts. Set the `unsafe-perm` flag to run scripts with root privileges.
- Source @ https://docs.npmjs.com/cli/v6/using-npm/config#unsafe-perm

## `.ebextensions` folder
You can add AWS Elastic Beanstalk configuration files (`.ebextensions`) to your web application's source code to configure your environment and customize the AWS resources that it contains.

In our case, if we don't enable [EPEL](https://fedoraproject.org/wiki/EPEL#What_is_Extra_Packages_for_Enterprise_Linux_.28or_EPEL.29.3F) and if we continue installing chromium as part of `npm install`, Puppeteer cannot launch Chromium due to unavailability of `libatk-1.0.so.0`.

## Deployment folder structure
```
app/
├── .ebextensions/
│   ├── 01_enableEPEL.config
│   └── 02_installEPELPackages.config
├── .npmrc
...
```

## Related GitHub Puppeteer tickets
- [Failed to launch chrome](https://github.com/puppeteer/puppeteer/issues/807)
- [Puppeteer not installing on AWS ElasticBeanstalk instance](https://github.com/puppeteer/puppeteer/issues/685)
- [Could not find browser on Elastic Beanstalk AWS](https://github.com/puppeteer/puppeteer/issues/6920)
- [libdbus-1.so.3: no version information available](https://github.com/puppeteer/puppeteer/issues/5379)
- [Headless Chromium with Puppeteer doesn't work on Amazon Linux AMI](https://github.com/puppeteer/puppeteer/issues/765)
