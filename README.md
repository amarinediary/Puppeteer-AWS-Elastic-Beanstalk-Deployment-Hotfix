# Marionette
Express Puppeteer boilerplate for AWS Elastic Beanstalk (64bit Linux 2 Node.js 14 environment) deployed via AWS/GithHub Code Pipeline.

Related to [Running Puppeteer on AWS EC2 instance running Amazon-Linux](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-aws-ec2-instance-running-amazon-linux) and [Chrome is downloaded but fails to launch on Node.js 14](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-is-downloaded-but-fails-to-launch-on-nodejs-14).

## Elastic Beanstalk Environement
|-|Parameters|
|-|-|
|Platform|`Node.js`|
|Platform branch|`Node.js 14 running on 64bit Amazon Linux 2`|
|Platform version|`5.4.3 (Recommended)`|

## `.npmrc`
The `.npmrc` file defines how npm should behave when running commands. Setting `unsafe-perm` to true suppress the UID/GID switching when running package scripts.
- Source @ https://docs.npmjs.com/cli/v6/using-npm/config#unsafe-perm

## `.ebextensions`
You can add AWS Elastic Beanstalk configuration files (.ebextensions) to your web application's source code to configure your environment and customize the AWS resources that it contains.
- Source @ https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html

If you do not enable EPEL and if you continue installing chromium as part of npm install, Puppeteer cannot launch Chromium due to unavailablity of `libatk-1.0.so.0` [...]
- Source @ https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-aws-ec2-instance-running-amazon-linux
