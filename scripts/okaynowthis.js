/*!
 * okayNowThis.js v1.0.1
 * A jQuery plugin that makes pausing and resuming queued functions a cinch.
 * https://github.com/jessengatai/okayNowThis.js
 * MIT License
 * by Jesse Ngatai - http://jessengatai.com
 */

(function ( $ ) {

	let ok_remaining = '';
	let ok_methods = {

		/**
		 * Build the queue
		 * @param  {inter}   milliseconds the time to delay before moving through the chain
		 * @param  {Function} callback    the callback used to move to the next chain item
		 * @return {Function}             the next line item
		 */
    keyframe : function(milliseconds,callback) {
    	let wrap = this;
    	// if the queue is currently paused to not pass go
    	if( wrap.hasClass('okayNowThis-paused') )
    		return this;

    	// if this is the first instance of the queue add a queue playing class
    	if( !wrap.hasClass('okayNowThis-playing' ) ) {
    		wrap.addClass('okayNowThis-playing');
    	}

    	let count = 0;

    	// add our function to the queue
			wrap.delay(milliseconds).queue(function(){
				callback();
				wrap.dequeue();
				let queue = wrap.queue().length;
				count++;
				// add keyframe class to wrap
				wrap.removeClass('keyframe-'+(count-1)).addClass('keyframe-'+count);
				// remove the status class if queue is empty (end of queue)
				if( queue == 0 ) {
					wrap.removeClass('okayNowThis-playing');
					wrap.removeClass (function (index, css) {
						return (css.match (/(^|\s)keyframe-\S+/g) || []).join(' ');
					});
				}
			});

			// moved to next keyframe in line
    	return this;
    },

    /**
     * Method to pause the key on current keyframe
     * @param  {Function} callback the callback to use once the chain has paused
     */
    pause : function(callback) {
    	// only pause if a queue exists and the queue is currently playing
    	if( this.queue().length > 0 && this.hasClass('okayNowThis-playing') ) {
    		// save the queue to our global variable
    		ok_remaining = this.queue();
    		// remove the queue that was attached
    		this.stop(true,true);
    		// adjust the stage lement classes
    		this.addClass('okayNowThis-paused').removeClass('okayNowThis-playing');
    		// if theres a callback run it
    		callback();
    	}
    },

		/**
		 * Method to resume a currently paused chain
		 * @param  {Function} callback the callback to use once the chain has resumed
		 */
    resume : function(callback) {
    	// only resume if a queue exists and the queue is currently paused
    	if( ok_remaining.length > 0 && this.hasClass('okayNowThis-paused') ) {
    		// remove "inprogress" string from the queue array
    		var array = ok_remaining.slice( 1 );
    		// requeue to our stage element
    		this.queue('fx',array);
    		// clear ok_remaining so resume button can't be double pressed
    		ok_remaining = '';
    		// adjust the stage lement classes
    		this.addClass('okayNowThis-playing').removeClass('okayNowThis-paused');
    		// if theres a callback run it
    		callback();
    	}
    },

		/**
		 * Method to reset the chain
		 * @param  {Function} callback the callback to use once the chain has been reset
		 */
    reset : function(callback) {
	    // remove and delete the queue
			this.stop(true,true);
			// remove the plugin classes that were added
			this.removeClass('okayNowThis-playing okayNowThis-paused');
			this.removeClass (function (index, css) {
				return (css.match (/(^|\s)keyframe-\S+/g) || []).join(' ');
			});
			// run any addtional code if there is a callback
			callback();
    },

	};

	/**
	 * Setup the our plugin!
	 * @param  {[type]} method_or_option [description]
	 * @return {[type]}                  [description]
	 */
  $.fn.okayNowThis = function(method_or_option) {
    if ( ok_methods[method_or_option] ) {
      return ok_methods[ method_or_option ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method_or_option === 'object' || ! method_or_option ) {
      // default to keyframe
      return ok_methods.keyframe.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method_or_option + ' does not exist on jQuery.okayNowThis' );
    }
  };

}( jQuery ));
