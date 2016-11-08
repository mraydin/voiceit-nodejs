#VoiceIt Node JS wrapper
[![npm version](https://badge.fury.io/js/VoiceIt.svg)](https://badge.fury.io/js/VoiceIt)

A Wrapper for using the VoiceIt Rest API.

##Download
###Method 1
You can either download the respository and add its contents to your root project folder by cloning or clicking or here [VoiceIt Node JS Library](https://github.com/voiceittech/voiceit-nodejs/archive/master.zip)
###Method 2
Otherwise you can easily download the VoiceIt Wrapper via the npm package manager simply via the command
```
npm install VoiceIt
```

##Usage
Then initialize a VoiceIt Object like this with your own developer id
```nodejs
myVoiceIt = require('VoiceIt');

myVoiceIt.initialize('1d6361f81f3047ca8b0c0332ac0fb17d');
//Pass your 32 character developer id as a parameter to the intialize method like shown above
```
##Demo
Also check out the Demo.js demo that demonstrates how to make a createUser API call using the VoiceIt Node JS Wrapper.

##Documentation
Finally use all other API Calls as documented on the [VoiceIt API Documentation](https://siv.voiceprintportal.com/getstarted.jsp#apidocs) page.
