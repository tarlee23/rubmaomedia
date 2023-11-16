const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validateAndRedirect() {
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if (email.trim() !=='' && password.trim() !== '' && emailPattern.test(email)) {
		window.location.href = 'homepage.html';
	} else {
		console.log('validation failed:',email,password);
		alert('Please fill in a valid email address and password before submit')
	}
}

function reloadPage() {
	var email = document.getElementById('email2').value;
	var password = document.getElementById('password2').value;
	
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if (email.trim() !=='' && password.trim() !== '' && emailPattern.test(email)) {
		location.reload();
	} else {
		console.log('validation failed:',email,password);
		alert('Please fill in a valid email address and password before submit')
	}
}