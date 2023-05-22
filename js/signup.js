var uname = document.getElementById("uname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passagain = document.getElementById("passagain");
var policy = document.getElementById("policy");
var signup = document.getElementById("signup");
var clear = document.getElementById("clear");


function validUname(uname) 
{
    // Starts with a number
    if (/^\d/.test(username)) 
    {
      return false;
    }
    // Check space
    if (/\s/.test(username)) 
    {
      return false;
    }
    return true;
  }

  if (validUname(uname)) 
  {
    alert("Valid username!");
  } 
  else 
  {
    alert("Invalid username!");
  }

function validEmail(email) 
{
    var emailForm = /^[a-zA-Z0-9._%+-]+@google\.com$/;
    //var correct = emailForm.test(email);
    //var emailInput = document.getElementById("email");

    if (email =! emailForm) 
    {
        email.style.borderColor = "red";
        email.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid email</p>");
    } 
    else 
    {
        email.style.borderColor = "green";
        const errorNode = emailInput.nextElementSibling;
        if (errorNode && errorNode.nodeName === "P") 
        {
            errorNode.remove();
        }
    }
}

function validPass(password) 
{
    if (password.length < 8) 
    {
        password.style.borderColor = "red";
        password.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid Password</p>");
        return false;
    }
    
    if (!/\d/.test(password)) 
    {
        //password.style.borderColor = "red";
        //password.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid Password</p>");
        return false;
    }
    
    if (!/[A-Z]/.test(password)) 
    {
        //password.style.borderColor = "red";
        //password.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid Password</p>");
        return false;
    }    
    
    if (!/[a-z]/.test(password)) 
    {
        //password.style.borderColor = "red";
        //password.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid Password</p>");
        return false;
    }    
    
    if (!/[@$!%*?&]/.test(password)) 
    {
        //password.style.borderColor = "red";
        //password.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid Password</p>");
        return false;
    }    
    
    password.style.borderColor = "green";
    return true;
}

function checkPass(passagain) 
{
    if (passagain =! password)
    {
        passagain.style.borderColor = "red";
        passagain.insertAdjacentHTML("afterend", "<p style='color:red'>Invalid Password</p>");
        return false;
    }
    else
    {
        password.style.borderColor = "green";
        return true;
    }
}

function checkPolicy(policy) 
{    
    if (policy.checked) 
    {
        signup.disabled = false;
    } 
    else 
    {
        signup.disabled = true;
    }
}

validEmail(email);
validPass(password);
checkPass(passagain);
checkPolicy(policy);

clear.addEventListener('click', () => {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('passagain').value = '';
    document.getElementById('policy').disabled = true;
    });

signup.addEventListener('click',() => {
    window.location("signin.html");
});