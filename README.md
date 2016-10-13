# oknowthis.js
A jQuery plugin that makes queuing (chaining), pausing and resuming functions a synch.

## Getting Started
The only requirement for okaynowthis.js to function is jQuery, so be sure to call that before okaynowthis.js

```html
<head>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="okaynowthis.min.js"></script>
</head>
```

## Basic Usage
The plugin works by manipulating queue's attached to DOM elements that are built using jQuery functions like 'delay'. Meaning you will need to call okaynowthis() on an element that has an unique ID.

```javascript
$('#yourstage').okaynowthis(method,delay,function(){
	// some code to run
});
```

## Methods
There are 4 main methods you can pass to the plugin.
* frame
* pause
* resume
* reset

Here are the basic examples of all 4 methods in action.

### Frame
It's best to think of each 'frame' like a keyframe in an animation. Each frame you add to your staging element will effectivly be a new function added to the queue on that element.

The 'frame' method will require us to pass a delay in milliseconds to each 'frame' we create. The delay will dicate the time in takes before the next 'frame' fires. This is ideal if your adding or removing a CSS class with a transition time, as we can make sure the CSS animation finishes before moving onto the next frame.

```javascript
$('.play').on('click',function(){

	// frame 1
	$('#yourstage').okaynowthis('frame',0,function(){
		// some code to run for frame 1 with 0 second delay

	// frame 2
	}).okaynowthis('frame',1000,function(){
		// some code to run for frame 2 with 1000 milliseconds delay

	});

});
```

### Pause
```javascript
$('.pause').on('click',function(){
	$('#yourstage').okaynowthis('pause',function(){
		// do something additional on pause
	});
});
```

### Resume
```javascript
$('.resume').on('click',function(){
	$('#yourstage').okaynowthis('resume',function(){
		// do something additional on resume
	});
});
```

### Resume
```javascript
$('.resume').on('click',function(){
	$('#yourstage').okaynowthis('resume',function(){
		// do something additional on resume
	});
});
```

## Classes
