/*!
 * okaynowthis.js v1.0.0
 * Chain, pause, resume and reset queued functions
 * https://github.com/jessengatai/okaynowthis.js
 * MIT License
 * by Jesse Ngatai - http://jessengatai.com
 */

(function ( $ ) {

	var ok_remaining = '';
	var ok_methods = {
		/**
	     *
	     * Build / run our queue frame by frame
	     *
	     */
	    frame : function(milliseconds,callback) {
	    	wrap = this;
	    	// if the queue is currently paused to not pass go
	    	if( wrap.hasClass('okaynowthis-paused') ) 
	    		return this;

	    	// if this is the first instance of the queue add a queue playing class
	    	if( !wrap.hasClass('okaynowthis-playing' ) ) {
	    		wrap.addClass('okaynowthis-playing');
	    	}

	    	// add our function to the queue
			wrap.delay(milliseconds).queue(function(){
				callback();
				wrap.dequeue();
				// remove the running class if queue is empty
				if( wrap.queue().length == 0 ) {
					wrap.removeClass('okaynowthis-playing');
				}
			});

			// moved to next frame in line
	    	return this;
	    },
	    /**
	     *
	     * Pause the frames
	     *
	     */
	    pause : function(callback) {
	    	// only pause if a queue exists and the queue is currently playing
	    	if( this.queue().length > 0 && this.hasClass('okaynowthis-playing') ) {
	    		// save the queue to our global variable
	    		ok_remaining = this.queue();
	    		// remove the queue that was attached
	    		this.stop(true,true);
	    		// adjust the stage lement classes
	    		this.addClass('okaynowthis-paused').removeClass('okaynowthis-playing');
	    		// if theres a callback run it
	    		callback();
	    	}
	    },
		/**
	     *
	     * Resume the show
	     *
	     */
	    resume : function(callback) {
	    	// only resume if a queue exists and the queue is currently paused
	    	if( ok_remaining.length > 0 && this.hasClass('okaynowthis-paused') ) {
	    		// remove "inprogress" string from the queue array
	    		var array = ok_remaining.slice( 1 );
	    		// requeue to our stage element
	    		this.queue('fx',array);
	    		// clear ok_remaining so resume button can't be double pressed
	    		ok_remaining = '';
	    		// adjust the stage lement classes
	    		this.addClass('okaynowthis-playing').removeClass('okaynowthis-paused');
	    		// if theres a callback run it
	    		callback();
	    	}
	    },
		/**
	     *
	     * Reset the frames
	     *
	     */
	    reset : function(callback) {
	    	// remove and delete the queue
			this.stop(true,true);
			// remove the plugin classes that were added
			this.removeClass('okaynowthis-playing okaynowthis-paused');
			// run any addtional code if there is a callback
			callback();
	    },
	};

    $.fn.okaynowthis = function(method_or_option) {

        if ( ok_methods[method_or_option] ) {
            return ok_methods[ method_or_option ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method_or_option === 'object' || ! method_or_option ) {
            // Default to "frame"
            return ok_methods.frame.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method_or_option + ' does not exist on jQuery.okaynowthis' );
        }  

    };

}( jQuery ));