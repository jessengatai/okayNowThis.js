jQuery(document).ready(function($) {

	const body = $('body');
	const log_c = $('#log');
	const log_z = $('#status');
	const log_x = $('#keyframe');
	const btn_pause = $('button.pause');
	const btn_resume = $('button.resume');
	const btn_reset = $('button.reset');
	const btn_play = $('button.play');

	// pause button
	btn_pause.on('click',function(){
		$('#stage').okaynowthis('pause',function(){
			btn_resume.removeAttr('disabled');
			btn_pause.attr('disabled','disabled');
			log_c.prepend('paused <br>');
			log_z.text('.okaynowthis-paused');
		});
	});

	// resume button
	btn_resume.on('click',function(){
		$('#stage').okaynowthis('resume',function(){
			btn_pause.removeAttr('disabled');
			btn_resume.attr('disabled','disabled');
			log_c.prepend('resumed <br>');
			log_z.text('.okaynowthis-playing');
		});
    console.log('this is a log');
	});

	// reset button
	btn_reset.on('click',function(){
		reset_animation();
	});

	// play button
	btn_play.on('click',function(){

		// show message areas
		$('.half').css('opacity','1');

		// disable play button
		btn_play.attr('disabled','disabled');
		btn_pause.removeAttr('disabled');
		log_z.text('.okaynowthis-playing');

		// we are declaring stage again because if the reset button is pressed the old stage variables is removed from the dom
		var stage = $('#stage');

		// build our queue
		stage.okaynowthis('keyframe',0,function(){
			stage.css('width','10%');
			log_c.prepend('function 1: 0ms delay, 10% width <br>');
			log_x.text('.keyframe-1');

		}).okaynowthis('keyframe',1000,function(){
			stage.css('width','20%');
			log_c.prepend('function 2: 1000ms delay, 20% width <br>');
			log_x.text('.keyframe-2');

		}).okaynowthis('keyframe',500,function(){
			stage.css('width','40%').addClass('blue blur');
			log_c.prepend('function 3: 500ms delay, 40% width, add classes .blue .blur <br>');
			log_x.text('.keyframe-3');

		}).okaynowthis('keyframe',1000,function(){
			body.addClass('angle');
			stage.css('width','50%');
			log_c.prepend('function 4: 1000ms delay, width 50%, add class to body .angle <br>');
			log_x.text('.keyframe-4');

		}).okaynowthis('keyframe',1500,function(){
			stage.css('width','70%').removeClass('blur');
			log_c.prepend('function 5: 1500ms delay, width 70%, removeClass .blur <br>');
			log_x.text('.keyframe-5');

		}).okaynowthis('keyframe',700,function(){
			body.addClass('circle');
			stage.css('width','80%').removeClass('blue').addClass('outline');
			log_c.prepend('function 6: 700ms delay, 80% width, removeClass .blue, add class .outline, add class to body .circle <br>');
			log_x.text('.keyframe-6');

		}).okaynowthis('keyframe',1000,function(){
			stage.css('width','90%');
			log_c.prepend('function 7: 1000ms delay, 90% width <br>');
			log_x.text('.keyframe-7');

		}).okaynowthis('keyframe',600,function(){
			stage.css('width','100%').addClass('black');
			log_c.prepend('function 8: 600ms delay, width 100%, add class .black <br>');
			log_x.text('.keyframe-8');

		}).okaynowthis('keyframe',1000,function(){
			stage.css('width','').removeClass('black outline');
			body.removeClass('angle circle');
			log_c.prepend('function 9: 1000ms, clear width, remove class .black .outine, body remove class .dark .circle <br>');
			log_x.text('.keyframe-9');

		}).okaynowthis('keyframe',600,function(){
			log_c.prepend('function 10: 600ms reset the stage <br>');
			log_x.text('.keyframe-10');

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
			wrap.append('<div id="stage" class=""></div>');
			// clean up any body classes that may have been added during the slideshow
			body.removeClass();
			// clean up our buttons
			btn_pause.attr('disabled','disabled');
			btn_resume.attr('disabled','disabled');
			btn_play.removeAttr('disabled');
			// add our message
			log_c.prepend('reset (removes plugin classes and deletes the queue) <br>');
			log_z.text('');
			log_x.text('');
		});

	}

});
