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

