# oknowthis.js
A jQuery plugin that makes queuing (chaining), pausing and resuming functions a cinch.

## Getting Started
The only requirement for okaynowthis.js to function is jQuery, so be sure to call that before okaynowthis.js

```html
<head>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="okaynowthis.min.js"></script>
</head>
```

## Basic Usage
The plugin works by manipulating queues attached to DOM elements that are built using jQuery functions like 'delay'. Meaning you will need to call okaynowthis() on an element that has an unique ID. Throughout the docs we will refer to this element as the 'staging' element.

```javascript
$('#yourstage').okaynowthis(method,delay,function(){
	// some code to run
});
```

## Methods
There are 4 methods you can pass to the plugin.
* keyframe
* pause
* resume
* reset

#### Keyframe
Each keyframe will be appended onto the queue attached to your staging element.

The keyframe method requires us to pass a delay in milliseconds. This delay dictates the time in takes before the next keyframe fires. This is ideal if your adding or removing a CSS class with a transition time, as we can make sure the CSS animation finishes before moving onto the next keyframe.

```javascript
$('.play').on('click',function(){

	// keyframe 1
	$('#yourstage').okaynowthis('keyframe',0,function(){
		// some code to run for keyframe 1 with 0 second delay

	// keyframe 2
	}).okaynowthis('keyframe',1000,function(){
		// some code to run for keyframe 2 with 1000 milliseconds delay

	});

});
```

#### Pause
```javascript
$('.pause').on('click',function(){
	$('#yourstage').okaynowthis('pause',function(){
		// do something additional on pause, like enabled our resume button!
	});
});
```

#### Resume
```javascript
$('.resume').on('click',function(){
	$('#yourstage').okaynowthis('resume',function(){
		// do something additional on resume, like enable our pause button!
	});
});
```

#### Reset
```javascript
$('.resume').on('click',function(){
	$('#yourstage').okaynowthis('resume',function(){
		// do something additional on resume, like clean up all the mess we probably made!
	});
});
```

## Classes
