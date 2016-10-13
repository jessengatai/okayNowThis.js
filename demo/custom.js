jQuery(document).ready(function($) {

	body = $('body');
	code = $('code');
	btn_pause = $('button.pause');
	btn_resume = $('button.resume');
	btn_reset = $('button.reset');
	btn_play = $('button.play');

	// pause button
	btn_pause.on('click',function(){
		$('#stage').okaynowthis('pause',function(){
			btn_resume.removeAttr('disabled');
			btn_pause.attr('disabled','disabled');
			code.prepend('paused <br>');
		});
	});

	// resume button
	btn_resume.on('click',function(){
		$('#stage').okaynowthis('resume',function(){
			btn_pause.removeAttr('disabled');
			btn_resume.attr('disabled','disabled');
			code.prepend('resumed <br>');
		});
	});

	// reset button
	btn_reset.on('click',function(){
		reset_animation();
	});

	// play button
	btn_play.on('click',function(){

		// disable play button
		btn_play.attr('disabled','disabled');
		btn_pause.removeAttr('disabled');

		// we are declaring stage again because if the reset button is pressed the old stage variables is removed from the dom
		var stage = $('#stage');

		// build our queue
		stage.okaynowthis('keyframe',0,function(){
			stage.css('width','10%');
			code.prepend('function 1: 0ms delay, 10% width <br>');

		}).okaynowthis('keyframe',1000,function(){
			stage.css('width','20%');
			code.prepend('function 2: 1000ms delay, 20% width <br>');

		}).okaynowthis('keyframe',500,function(){
			stage.css('width','40%').addClass('blue blur');
			code.prepend('function 3: 500ms delay, 40% width, add classes .blue .blur <br>');

		}).okaynowthis('keyframe',1000,function(){
			body.addClass('angle');
			stage.css('width','50%');
			code.prepend('function 4: 1000ms delay, width 50%, add class to body .angle <br>');

		}).okaynowthis('keyframe',1500,function(){
			stage.css('width','70%').removeClass('blur');
			code.prepend('function 5: 1500ms delay, width 70%, removeClass .blur <br>');

		}).okaynowthis('keyframe',700,function(){
			body.addClass('circle');
			stage.css('width','80%').removeClass('blue').addClass('outline');
			code.prepend('function 6: 700ms delay, 80% width, removeClass .blue, add class .outline, add class to body .circle <br>');

		}).okaynowthis('keyframe',1000,function(){
			stage.css('width','90%');
			code.prepend('function 7: 1000ms delay, 90% width <br>');

		}).okaynowthis('keyframe',600,function(){
			stage.css('width','100%').addClass('black');
			code.prepend('function 7: 600ms delay, width 100%, add class .black <br>');

		}).okaynowthis('keyframe',1000,function(){
			stage.css('width','').removeClass('black outline');
			body.removeClass('angle circle');
			code.prepend('function 8: 1000ms, clear width, remove class .black .outine, body remove class .dark .circle <br>');

		}).okaynowthis('keyframe',600,function(){
			code.prepend('function 9: 600ms reset the stage <br>');
			reset_animation(); // just for good measure we are reseting the entire stage at the end

		});
		// end of queue

	});

	// our reset functions
	function reset_animation(){

		// we are declaring stage again because if the reset button is pressed the old stage variables are useless
		var stage = $('#stage');
		var wrap = $('#stage-wrap');

		stage.okaynowthis('reset',function(){
			// delete the entire staging element
			stage.remove();
			// add the original stage markup back in (for complex markup consider using .clone on document ready)
			wrap.append('<div id="stage" class="animated infinite"></div>');
			// clean up any body classes that may have been added during the slideshow
			body.removeClass();
			// clean up our buttons
			btn_pause.attr('disabled','disabled');
			btn_resume.attr('disabled','disabled');
			btn_play.removeAttr('disabled');
			// add our message
			code.prepend('reset (removes plugin classes and detaches / deletes the queued functions) <br>');
		});

	}

});