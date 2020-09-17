
function valid() {
	
	var first_name = document.getElementById('fn').value;
	var last_name = document.getElementById('ln').value;
	var email = document.getElementById('email1').value;
	var password = document.getElementById('pass').value;
	var confirm_password = document.getElementById('confirm').value;

	if(first_name == "" )
	{
         document.getElementById('firstname').innerHTML = "*Please enter the first name.";
         return false;
	}

	if(!isNaN(first_name))
	{
		 document.getElementById('firstname').innerHTML = "*Digits are not allowed..";
         return false;
	}

	if(last_name == "" )
	{
         document.getElementById('lastname').innerHTML = "*Please enter the last name.";
         return false;
	}

	if(!isNaN(last_name))
	{
		 document.getElementById('lastname').innerHTML = "*Digits are not allowed.";
         return false;
	}

	if(email == "" )
	{
         document.getElementById('mail').innerHTML = "*Please enter the email.";
         return false;
	}

    if( (email.search(/[@]/) == -1) || (email.search(/[.]/) == -1) )
	{
         document.getElementById('mail').innerHTML = "*Invalid format";
         return false;
	}

	if(email.indexOf('@') == 0 )
	{
         document.getElementById('mail').innerHTML = "*Invalid position of @";
         return false;
	}

	if( (email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.') )
	{
         document.getElementById('mail').innerHTML = "*Invalid position of .";
         return false;
	}

	if(password == "" )
	{
         document.getElementById('password1').innerHTML = "*Please enter the password.";
         return false;
	}

	if( password.search(/[0-9]/) == -1)
	{
         document.getElementById('password1').innerHTML = "*Include atleast 1 digit.";
         return false;
	}

    if( password.search(/[a-z]/) == -1)
	{
         document.getElementById('password1').innerHTML = "*Include atleast 1 lower case character.";
         return false;
	}

	if( password.search(/[A-Z]/) == -1)
	{
         document.getElementById('password1').innerHTML = "*Include atleast 1 upper case character.";
         return false;
	}

	if( password.search(/[~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\;\:\'\"\,\<\.\>\/\?]/) == -1)
	{
         document.getElementById('password1').innerHTML = "*Include atleast 1 special character.";
         return false;
	}

	if( (password.length < 5)  || (password.length > 10) )
	{
         document.getElementById('password1').innerHTML = "*Password length should be between 5 to 10 characters.";
         return false;
	}

	if(confirm_password == "" )
	{
         document.getElementById('confirmpassword').innerHTML = "*Please enter the confirm password.";
         return false;
	}

    if(confirm_password != password )
	{
         document.getElementById('confirmpassword').innerHTML = "*Passwords are different.";
         return false;
	}

}
