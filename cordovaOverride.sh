#!/bin/bash
set -o errexit #exit with error code if something goes wrong.
if [ -z ${CI_APP_NAME} ]; then
echo "Not in Appflow skipping cordova hack";
else
echo "In Appflow...using 8.1.2"
npm uninstall -g @ionic-enterprise/cordova
npm install -g cordova@8.1.2
#echo "In Appflow...using cordova-ios@5.1.1"
#npm i cordova-ios@5.1.1
echo "In Appflow...using cordova-ios@6.0.0-nightly.2020.2.24.4ac15525"
npm i cordova-ios@6.0.0-nightly.2020.2.24.4ac15525
#echo "In Appflow...using cordova-ios@latest"
#npm i cordova-ios@latest
fi