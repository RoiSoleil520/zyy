const $ = require('jquery');

$(function ($) {
	'user strict';

	var $interview_len = $('.interview li').length,
		$interview = $('.interview li'),
		$interview_next = $('.interview__next'),
		$interview_prev = $('.interview__prev'),
		$current = $('.interview li:first')
	;
	let index = 0;

	$interview_next.click(function () {
		if (index === $interview_len - 1) {
			index = 0;
		} else {
			index++;
		}
		$interview.eq(index).show().siblings('li').hide();
	}).eq(0).click();
	$interview_prev.click(function () {
		if (index === 0) {
			index = $interview_len - 1;
		} else {
			index--;
		}
		$interview.eq(index).show().siblings('li').hide();
	}).eq(0).click();
})