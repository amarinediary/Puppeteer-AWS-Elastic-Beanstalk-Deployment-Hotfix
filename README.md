# Marionette
Puppeteer deployment hotfix for AWS Elastic Beanstalk (64bit Linux 2 Node.js 14 environment) using AWS/GitHub Code Pipeline.

Related to both [Running Puppeteer on AWS EC2 instance running Amazon-Linux](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-on-aws-ec2-instance-running-amazon-linux) and [Chrome is downloaded but fails to launch on Node.js 14](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-is-downloaded-but-fails-to-launch-on-nodejs-14) issues.

## Elastic Beanstalk Environement
|-|Parameters|
|-|-|
|Platform|`Node.js`|
|Platform branch|`Node.js 14 running on 64bit Amazon Linux 2`|
|Platform version|`5.4.3 (Recommended)`|

## `.npmrc`
The `.npmrc` file defines how npm should behave when running commands. Setting `unsafe-perm` to true suppress the UID/GID switching when running package scripts. Set the `unsafe-perm` flag to run scripts with root privileges.
- Source @ https://docs.npmjs.com/cli/v6/using-npm/config#unsafe-perm

## `.ebextensions`
You can add AWS Elastic Beanstalk configuration files (`.ebextensions`) to your web application's source code to configure your environment and customize the AWS resources that it contains.

In our case, if we don't enable [EPEL](https://fedoraproject.org/wiki/EPEL#What_is_Extra_Packages_for_Enterprise_Linux_.28or_EPEL.29.3F) and if we continue installing chromium as part of `npm install`, Puppeteer cannot launch Chromium due to unavailability of `libatk-1.0.so.0`.

## Folder Structure
Simply paste both the `.npmrc` file and the `.ebextensions` folder at the root base of your project's folder.

```
app/
├── .ebextensions/
│   ├── 01_enableEPEL.config
│   └── 02_installEPELPackages.config
├── .npmrc/
...
```
