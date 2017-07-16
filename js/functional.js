/*==============================================//
// ======== Hide Textarea palceholder ========== //
//=============================================*/
var myTextArea = document.querySelectorAll("textarea");
var i;
for (i in myTextArea) {
	myTextArea[i].onfocus = function () {
		'use strict';
		// store Textarea placeholder Attribute in data-place Attribute
		this.setAttribute('data-place', this.getAttribute('placeholder'));
		// Empty Placeholder Attribute
		this.setAttribute('placeholder', '');
	};

	myTextArea[i].onblur = function () {
		'use strict';
		// Get placeholder Attribute from data-place Attribute
		this.setAttribute('placeholder', this.getAttribute('data-place'));
		// Empty data-place Attribute
		this.setAttribute('data-place', '');
	};
}
/*==============================================//
// ========== Hide Input palceholder =========== //
//=============================================*/
var myInput = document.querySelectorAll("input");
var i;
for (i in myInput) {
	myInput[i].onfocus = function () {
		'use strict';
		// store placeholder Attribute in Backup Attribute
		this.setAttribute('data-place', this.getAttribute('placeholder'));
		// Empty Placeholder
		this.setAttribute('placeholder', '');
	};

	myInput[i].onblur = function () {
		'use strict';
		// Get placeholder Attribute from data-place Attribute
		this.setAttribute('placeholder', this.getAttribute('data-place'));
		// Empty data-place
		this.setAttribute('data-place', '');
	};
}
/*==============================================//
// ========== Start About me ================= //
//=============================================*/
window.addEventListener('load', function (event) {
	event.preventDefault();
	const moreInfo = document.querySelector('#aboutInfor');
	const infoPragraph = document.querySelector('.aboutMoreInfor');
	const about = document.querySelector('.about');
	infoPragraph.style.display = 'none';
	moreInfo.addEventListener('click', function () {
		if (infoPragraph.style.display === 'none') {
			infoPragraph.style.display = 'block';
			about.style.height = '900px';
		} else if (infoPragraph.style.display === 'block') {
			infoPragraph.style.display = 'none';
		}
	});
});
/*==============================================//
// ========== Start Form Validation ========== //
//=============================================*/
window.addEventListener('load', function () {
	const firstName = document.forms[0].firstName;
firstName.addEventListener('keyup', function (params) {
	const track = params.target.value;
	const errorBox = params.target.nextElementSibling;
	if (track.length < 6 || track === "") {
		errorBox.innerHTML = "&cross; empty or shorter than 6 letters";
		errorBox.style.color = "red";
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	} else {
		errorBox.innerHTML = "&check;";
		errorBox.style.color = "green";
		firstName.style.borderColor = "green"
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	}
})

const lastName = document.forms[0].lastName;
lastName.addEventListener('keyup', function (params) {
	const track = params.target.value;
	const errorBox = params.target.nextElementSibling;
	if (track.length < 6 || track === "") {
		errorBox.innerHTML = "&cross; empty or shorter than 6 letters";
		errorBox.style.color = "red";
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	} else {
		errorBox.innerHTML = "&check;";
		errorBox.style.color = "green";
		lastName.style.borderColor = "green"
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	}
})

const email = document.forms[0].email;
email.addEventListener('keyup', function (params) {
	const track = params.target.value;
	const errorBox = params.target.nextElementSibling;
	if (track.length < 6 || track.indexOf('@') === -1 || track.indexOf('.') === -1 || track.indexOf('@') === 0 || track.indexOf('@') > track.indexOf('.') || track.indexOf('.') === track.length || track.indexOf('.') >= (track.length-2)) {
		errorBox.innerHTML = "&cross; not correct Email";
		errorBox.style.color = "red";
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	} else {
		errorBox.innerHTML = "&check;";
		errorBox.style.color = "green";
		email.style.borderColor = "green"
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	}
})
const confirmEmail = document.forms[0].confirmEmail;
confirmEmail.addEventListener('keyup', function (params) {
	const errorBox = params.target.nextElementSibling;
	if (confirmEmail.value !== email.value) {
		errorBox.innerHTML = "&cross; not the same email";
		errorBox.style.color = "red";
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	} else {
		errorBox.innerHTML = "&check;";
		errorBox.style.color = "green";
		confirmEmail.style.borderColor = "green"
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	}
})

const password = document.forms[0].password;
password.addEventListener('keyup', function (params) {
	const track = params.target.value;
	const errorBox = params.target.nextElementSibling;
	if (track.length < 6 || track === "") {
		errorBox.innerHTML = "&cross; empty or shorter than 6 letters";
		errorBox.style.color = "red";
		errorBox.style.display = "block";
		errorBox.style.margin = "block";
		errorBox.style.margin = "-10px 0px -10px 0 ";
	} else {
		errorBox.innerHTML = "&check;";
		errorBox.style.color = "green";
		password.style.borderColor = "green"
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px -10px 0";
	}
})
const confirmPassword = document.forms[0].confirmPassword;
confirmPassword.addEventListener('keyup', function (params) {
	const errorBox = params.target.nextElementSibling;
	if (confirmPassword.value !== password.value || confirmPassword.value === '') {
		errorBox.innerHTML = "&cross; not the same password";
		errorBox.style.color = "red";
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px 10px 0";
	} else {
		
		errorBox.innerHTML = "&check;";
		errorBox.style.color = "green";
		errorBox.style.display = "block";
		errorBox.style.margin = "-10px 0px 10px 0";
		confirmPassword.style.borderColor = "green"
	}
	
})

const formSubmit = document.getElementById('formSubmit');
formSubmit.addEventListener('click', function (event) {
	event.preventDefault();

});
});
/*========= Dropmenu ===========*/
