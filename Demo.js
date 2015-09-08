myVoiceIt = require('VoiceIt');

myVoiceIt.initialize('DEVELOPER_ID_HERE');
//Pass your 6 digit developer id as parameter to the intialize method like shown above
myVoiceIt.createUser({
	email: 'developer@voiceit-tech.com',
	password: 'd0CHipUXOk',
	firstName: 'John',
	lastName: 'Doe',
	phone1:'530-946-4351',
	phone2:'530-654-3464',
	//The API Call also accepts a phone3 argument if desired
	callback: function(response){
	//ADD CUSTOM CODE HERE TO USE
	//DATA RECEIVED IN THE response VARIABLE
	console.log("The Server Responded with the JSON: ",response);
  //The Server Responded with the JSON: { "Result" : "Success" }
	}
});
