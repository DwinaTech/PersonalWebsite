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



