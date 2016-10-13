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
The plugin works by manipulating queue's attached to DOM elements that are built using jQuery functions like 'delay'. Meaning you will need to call okaynowthis() on unique element that has an unique ID.

```javascript
$('#yourstage').okaynowthis(method,delay,function(){
	// some code to run
});
```

## Methods
There are 3 main methods you can pass to okaynowthis.js.
* pause
* resume
* frame

Here are basic examples of all 3 methods in action.

**Pause:**
```javascript
$('.pause').on('click',function(){
	$('#yourstage').okaynowthis('pause',function(){
		// do something additional on pause
	});
});
```
**Resume:**
```javascript
$('.resume').on('click',function(){
	$('#yourstage').okaynowthis('resume',function(){
		// do something additional on resume
	});
});
```

**Frame:**
```javascript
$('.play').on('click',function(){

	// frame 1
	$('#yourstage').okaynowthis('frame',0,function(){
		// some code to run for frame 1 with 0 second delay

	// frame 2
	}).okaynowthis('frame',1000,function(){
		// some code to run for frame 2 with 1000 milisecond delay

	});

});
```