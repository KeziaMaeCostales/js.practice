//create a var named favActorFirstName and store fave actor's first name 
var favActorFirstName = "Kim";
//create a var named favActorSecondLastName and store the last name 
var favActorsLastName = "Chiu";

//concatenate the first and last names into a var named fullName
var fullName = favActorFirstName + " " + favActorsLastName;

//create a var named uppercase and store capitalized version of your fav
var uppercase = fullName.toUpperCase();

//create a var named message and store a message like: "My favorite actor is [FULL_NAME]"
var message = "My favorite actor is " + uppercase;

//Append the message to include " his best show is Silicon Valley".
message += ", his best show is Silicon Valley.";

//log all the var to the console
console.log(favActorFirstName);
console.log(favActorsLastName);
console.log(fullName);
console.log(uppercase);
console.log(message);
