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
		$btn__guid = $('main .btn__guid'),
		$menu = $('#menu'),
		$top = $(".top"),
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
		//clearInterval($interval);  //如果点击了就清除自动播放
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

//点击遮罩关闭
	// $cover.click(function(){
	// 	var $slideout_open = $('.slideout-open'),
	// 	    $slideout_menu = $('.slideout-menu');
	// 	console.log('1');
	// 	$slideout_menu.hide();
	// 	$cover.hide();
	// })

	$(window).scroll(function() {
      /* 判断滚动条 距离页面顶部的距离 100可以自定义*/
      if($(window).scrollTop() > 100) {
       $top.fadeIn(100); /* 这里用.show()也可以 只是效果太丑 */
      } else {
       $top.fadeOut(100);
      }
     });

	 $top.click( function() {
      $('body,html').animate({
       scrollTop: 0
      }, 1000);
      return false;
     });

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