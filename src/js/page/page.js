const $ = require('jquery');

$(function($){
	'user strict';

	var $interview_content_len = $('.interview_content li').length
	   ,$interview_content = $('.interview_content li')
	   ,$interview_content_next = $('.interview_content--next')
	   ,$interview_content_prev = $('.interview_content--prev')
	   ,$current = $('.interview_content li:first')
	   //,$last = $('.interview_content li:last')
	   ;

	   //$('.interview_content li:nth-child(i++)').show();
	   $current.show();

	   $interview_content_next.click(function(){
	   	if( $current.next('li')){
	   		$current.next('li').show().siblings('li').hide();
	   		$current = $current.next('li');
	   		console.log( $interview_content_len);
	   		console.log($current);
	   	}
	   })
	   $interview_content_prev.click(function(){
	   	if( $current.prev('li')){
	   		$current.prev('li').show().siblings('li').hide();
	   		$current = $current.prev('li');
	   	}
	   })

})