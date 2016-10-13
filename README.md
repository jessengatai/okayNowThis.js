# oknowthis.js
A jQuery plugin that makes queuing (chaining), pausing and resuming functions a synch.

### Getting Started
The only requirement for okaynowthis.js to function is jQuery, so be sure to call that before okaynowthis.js

```{r}
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="okaynowthis.min.js"></script>
```

### Basic Usage
The plugin works by manipulating queue's attached to DOM elements that are built using jQuery functions like 'delay'. Meaning you will need to call okaynowthis() on unique element that has an unique ID.

Please note 'delay' is only required when using the 'frame' method.

```{r}
	$('#yourstage').okaynowthis(method,delay,function(){
		// some code to run
	});
```

### Methods
There are 3 main methods you can pass to okaynowthis.js, which are 'pause', 'resume' and 'frame'. Here is a very basic example of all 3 methods in action.

```{r}
	// pause button
	$('.pause').on('click',function(){
		$('#yourstage').okaynowthis('pause',function(){
			// do something on pause
		});
	});

	// resume button
	$('.resume').on('click',function(){
		$('#yourstage').okaynowthis('resume',function(){
			// do something on resume
		});
	});

	// play button
	$('.play').on('click',function(){

		// frame 1
		$('#yourstage').okaynowthis('frame',0,function(){
			// some code to run for frame 1 with 0 second delay

		// frame 2
		}).okaynowthis('frame',1000,function(){
			// some code to run for frame 2 with 1000ms delay

		});

	});
```