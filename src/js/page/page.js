const $ = require('jquery');

$(function ($) {
	'user strict';

	var $interview_len = $('.interview li').length,
		$interview = $('.interview li'),
		$interview_next = $('.interview__next'),
		$interview_prev = $('.interview__prev'),
		$current = $('.interview li:first'),
		$btn__guid = $('.btn__guid'),
		$cover = $('.cover'),
		// $slideout_menu = $('.slideout-menu'),
		// $slideout_open = $('.slideout-open'),
		$interval = setInterval (change, 5000)
	;
	let index = 0;

	function change(){
		if (index === $interview_len - 1) {
			index = 0;
		} else {
			index++;
		}
		$interview.eq(index).fadeIn("slow").siblings('li').hide();
	}

	$interview_next.click(function () {
		//clearInterval($interval);
		if (index === $interview_len - 1) {
			index = 0;
		} else {
			index++;
		}
		$interview.eq(index).fadeIn("slow").siblings('li').hide();
	}).eq(0).click();

	$interview_prev.click(function () {
		if (index === 0) {
			index = $interview_len - 1;
		} else {
			index--;
		}
		$interview.eq(index).fadeIn("slow").siblings('li').hide();
	}).eq(0).click();

	$btn__guid.click(function(){
		$cover.toggle();
	})

	// $cover.click(function(){
	// 	console.log('1');
	// })

	var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
     });

     document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
        slideout.toggle();
     });

     document.querySelector('.menu').addEventListener('click', function(eve) {
        if (eve.target.nodeName === 'A') { slideout.close(); }
     });
})