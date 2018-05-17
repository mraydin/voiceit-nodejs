myVoiceIt = require('VoiceIt');
myVoiceIt.initialize('DEVELOPER_ID_HERE');
//Pass your developerId as parameter to the intialize method like shown above
// myVoiceIt.createUser({
// 	userId: 'developerUserId',
// 	password: 'd0CHipUXOk',
// 	//The API Call also accepts a phone3 argument if desired
// 	callback: function(response){
// 	//ADD CUSTOM CODE HERE TO USE
// 	//DATA RECEIVED IN THE response VARIABLE
// 	console.log("The Server Responded with the JSON: ",response);
//   //The Server Responded with the JSON: { "Result" : "Success" }
// 	}
// });

myVoiceIt.getEnrollmentsCount({
		userId: 'developerUserId',
		password: 'd0CHipUXOk',
		contentLanguage: 'en-US',
		phrase:'never forget tomorrow is a new day',
		callback: function(response){
			console.log(response);
		}
})
