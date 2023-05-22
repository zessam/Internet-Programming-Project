var uname = document.getElementById("uname");
//var email = document.getElementById("email");
var pass = document.getElementById("pass");
var passRet = document.getElementById("passRet");
var remember = document.getElementById("remember");
var signin = document.getElementById("signin");
var cancel = document.getElementById("cancel");


function include(file) 
{
    
    function checkUname(uname) 
    {
        if(uname != username)
        {
            uname.style.borderColor = "red";
            uname.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid UserName</p>");
            return false;
        }
        else 
        {
            uname.style.borderColor = "green";
            return true;
        }
    }

    function checkPass(pass) 
    {
        if(pass != password)
        {
            pass.style.borderColor = "red";
            pass.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid Password</p>");
            return false;
        }
        else 
        {
            password.style.borderColor = "green";
            return true;
        }
    }
}

signin.addEventListener('click',() => {
    window.location("../pages/bookpage.html");
});


include("../js/data.js");