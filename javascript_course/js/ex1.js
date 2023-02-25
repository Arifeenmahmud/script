console.log("Hello JavaScript!");


var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName);

var yearOfBirth = 1990;
var currentYear = 2018;
var age = currentYear - yearOfBirth;
console.log(age);
 
var message =  "Hi, my name is" +firstName +" " + lastName+", I'm "+ age+" years old and I'm learning Javascript";
console.log(message);

var message =  `Hi, my name is ${firstName} ${lastName}, I'm ${age} years old and I'm learning Javascript`;
console.log(message);

document.getElementById("student_message").innerHTML = message;

var num1 = parseInt (document.getElementById("num_1").innerHTML);
var num2 = parseInt (document.getElementById("num_2").innerHTML);
var result = num1 + num2;
result = result.toFixed(2);
console.log(result);
document.getElementById("result").innerHTML = result;

var url = "https://" + document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url;

// var url2 = document.getElementById("url_3").innerHTML;
// document.getElementById("url_4").innerHTML = url2;
var url2 = (document.getElementById("url_3").innerHTML).replace("https://", "http://");
document.getElementById("url_4").innerHTML = url2;