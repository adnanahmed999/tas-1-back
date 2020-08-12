
function validate()
{	
	var name = document.getElementById("name")
	var email = document.getElementById("email")
	var number = document.getElementById("number")
	var password = document.getElementById("password")
	var name_label = document.getElementById("name_label")
	var email_label = document.getElementById("email_label")
	var number_label = document.getElementById("number_label")
	var password_label = document.getElementById("password_label")
	var success = true
	var check_agree = document.getElementById("check")
	var agree_label = document.getElementById("agree_label")


	if ( name.value.trim() == "" )
	{
		name.style.border="3px solid red";
		name_label.style.visibility = "visible";
		name_label.style.color= "red";
		name_label.innerHTML = "<b>Name not Entered</b>"
		success = false;
	}

	var regx_email = /^([a-zA-z0-9\.-]+)@([a-zA-z0-9]+).([a-z]+)(.[a-z]+)$/

	if ( !regx_email.test(email.value) )
	{
		email.style.border = "3px solid red";
		email_label.innerHTML = "<b>Improper Email</b>";
		email_label.style.visibility = "visible";
		email_label.style.color = "red";
		success = false;
	}

	var regx_num = /^[7-9]\d{9}$/ ;

	if ( !regx_num.test(number.value) )
	{
		number.style.border = "3px solid red";
		number_label.innerHTML = "<b>Improper Number</b>";
		number_label.style.visibility = "visible";
		number_label.style.color = "red";
		success = false;
	}

	 if ( password.value.trim() == "" )
	{
		password.style.border="3px solid red";
		password_label.style.visibility = "visible";
		password_label.style.color= "red";
		password_label.innerHTML = "<b>Password Not Entered</b>"
		success = false;
	}

 	else if ( password.value.trim().length < 3 )
	{
		password.style.border="3px solid red";
		password_label.innerHTML = "<b>Too Small</b>"
		password_label.style.visibility = "visible";
		success = false;
	}

	

	if (check_agree.checked === false )
	{	
		agree_label.innerHTML = "<b>Please accept Terms</b>"
		agree_label.style.visibility = "visible";
		agree_label.style.color = "red"
		success = false;		
	}

	if (success === true)
	{
		alert("Thanks! Will reach you shortly!!!")
	}

	return success;

}
