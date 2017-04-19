/* global elert, consol*/

		function mOut(){
			'use strict';
		  document.getElementById('change').src= "http://res.cloudinary.com/durykvdaf/image/upload/v1490287914/IMG-20161117-WA0019_orsohh.jpg";
		}

		function mOver(){
			'use strict';
		  document.getElementById('change').src= "http://res.cloudinary.com/durykvdaf/image/upload/v1490886904/gg_i8nrjs.jpg";
		}

		$(function(){
			'use strict';

			$('.move').click(function(){
		        $('html, body').animate({
		            scrollTop: $('#move-to').offset().top
		        }),3000;
		    });

			$('ul li a').click(function(){
		        $('html, body').animate({
		            scrollTop: $('#'+ $(this).data('value')).offset().top
		        }),3000;
		    });

	});
	//==============================================//
// ============ Hide palceholder ============== //
//=============================================//
var myInput = document.querySelectorAll("input");
var i;
for(i=0; i <= myInput.length; i++){
	myInput[i].onfocus = function(){
  'use strict';
  // store placeholder Attribute in Backup Attribute
    this.setAttribute('data-place', this.getAttribute('placeholder') );
  // Empty Placeholder
    this.setAttribute('placeholder', '');
};

myInput[i].onblur = function(){
  'use strict';
  // Get placeholder Attribute from data-place Attribute
    this.setAttribute('placeholder', this.getAttribute('data-place') );
  // Empty data-place
    this.setAttribute('data-place', '');
};

}
