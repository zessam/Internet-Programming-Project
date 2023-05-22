//create an empty object to store input data

let userData = {};

// get input values
var username = document.getElementById('uname').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

// add input values to userData object
userData.username = username;
userData.email = email;
userData.password = password;

// save userData object to localStorage
localStorage.setItem('userData', JSON.stringify(userData));