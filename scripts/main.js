jQuery(document).ready(function($) {

	// logs
	const body = $('body');
	const log_c = $('#log');
	const log_z = $('#status');
	const log_x = $('#keyframe');

	// buttons
	const btn_pause = $('button.pause');
	const btn_resume = $('button.resume');
	const btn_reset = $('button.reset');
	const btn_play = $('button.play');

	// geometry
	const shape1 = $('#shape-1');
	const shape2 = $('#shape-2');
	const shape3 = $('#shape-3');

	/**
	 * Setup pause button
	 */
	btn_pause.on('click',function(){
		$('#stage').okayNowThis('pause',function(){
			btn_resume.removeAttr('disabled');
			btn_pause.attr('disabled','disabled');
			log_c.prepend('paused <br>');
			log_z.text('.okayNowThis-paused');
		});
	});

	/**
	 * Setup resume button
	 */
	btn_resume.on('click',function(){
		$('#stage').okayNowThis('resume',function(){
			btn_pause.removeAttr('disabled');
			btn_resume.attr('disabled','disabled');
			log_c.prepend('resumed <br>');
			log_z.text('.okayNowThis-playing');
		});
    console.log('this is a log');
	});

	/**
	 * Setup reset button
	 */
	btn_reset.on('click',function(){
		reset_animation();
	});

	/**
	 * Setup play button
	 */
	btn_play.on('click',function(){

		// disable play button
		btn_play.attr('disabled','disabled');
		// enable the pause button
		btn_pause.removeAttr('disabled');
		// add to logs
		log_z.text('.okayNowThis-playing');

		/**
		 * We are declaring stage inside local scope because if the reset
		 * button is pressed the old stage variables is removed from the dom
		 */
		let stage = $('#stage');

		// build our queue
		stage.okayNowThis('keyframe',0,function(){
			stage.css('width','10%');
			shape1.addClass('angle');
			log_c.prepend('function 1: 0ms delay </br>');
			log_x.text('.keyframe-1');

		}).okayNowThis('keyframe',1000,function(){
			stage.css('width','20%');
			log_c.prepend('function 2: 1000ms delay </br>');
			log_x.text('.keyframe-2');

		}).okayNowThis('keyframe',500,function(){
			stage.css('width','30%');
			body.addClass('rain-on');
			log_c.prepend('function 3: 500ms delay </br>');
			log_x.text('.keyframe-3');

		}).okayNowThis('keyframe',1000,function(){
			stage.css('width','40%');
			body.addClass('triangle-in');
			log_c.prepend('function 4: 1000ms delay </br>');
			log_x.text('.keyframe-4');

		}).okayNowThis('keyframe',1500,function(){
			stage.css('width','50%');
			log_c.prepend('function 5: 1500ms delay </br>');
			log_x.text('.keyframe-5');

		}).okayNowThis('keyframe',700,function(){
			shape1.addClass('circle');
			stage.css('width','60%');
			log_c.prepend('function 6: 700ms delay </br>');
			log_x.text('.keyframe-6');

		}).okayNowThis('keyframe',1000,function(){
			stage.css('width','70%');
			body.addClass('block-in');
			body.addClass('triangle-out');
			log_c.prepend('function 7: 1000ms delay </br>');
			log_x.text('.keyframe-7');

		}).okayNowThis('keyframe',600,function(){
			stage.css('width','80%');
			body.addClass('vertical-rain-on');
			log_c.prepend('function 8: 600ms delay </br>');
			log_x.text('.keyframe-8');

		}).okayNowThis('keyframe',1000,function(){
			stage.css('width','90%');
			shape1.removeClass('angle circle');
			log_c.prepend('function 9: 1000ms delay </br>');
			log_x.text('.keyframe-9');

		}).okayNowThis('keyframe',700,function(){
			stage.css('width','100%');
			body.removeClass('angle circle');
			body.addClass('block-out');
			log_c.prepend('function 10: 700ms delay </br>');
			log_x.text('.keyframe-10');

		}).okayNowThis('keyframe',800,function(){
			stage.css('width','1%');
			log_c.prepend('function 11: 800ms delay </br>');
			log_x.text('.keyframe-11');

		}).okayNowThis('keyframe',600,function(){
			log_c.prepend('function 12: 600ms delay </br>');
			log_x.text('.keyframe-12');

			reset_animation(); // just for good measure we are reseting the entire stage at the end

		});
		// end of queue

	});

	// our reset functions
	function reset_animation(){

		// we are declaring stage again because if the reset button is pressed the old stage variables are useless
		var stage = $('#stage');
		var wrap = $('#stage-wrap');
		var shape1 = $('#shape-1');

		stage.okayNowThis('reset',function(){
			// delete the entire staging element
			stage.remove();
			// add the original stage markup back in (for complex markup consider using .clone on document ready)
			wrap.append('<div id="stage" class="progress-bar"></div>');
			// clean up any body classes that may have been added during the slideshow
			body.removeClass();
			shape1.removeClass();
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
