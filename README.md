# okayNowThis.js
A jQuery plugin that makes pausing and resuming queued functions a cinch.

[View the demo](https://jessengatai.github.io/okayNowThis.js/)

## Getting Started
The only requirement for okayNowThis.js to function is jQuery, so be sure to call that before the plugin.

```html
<head>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="okayNowThis.min.js"></script>
</head>
```

## Basic Usage
The plugin works by manipulating queues attached to DOM elements that are built using jQuery functions like 'delay'. Meaning you will need to call okayNowThis() on an element that has an unique ID. Throughout the docs we will refer to this element as the 'staging' element.

```javascript
$('#yourstage').okayNowThis(method,delay,function(){
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
	$('#yourstage').okayNowThis('keyframe',0,function(){
		// code to run with no delay, like show our pause button!

	// keyframe 2
	}).okayNowThis('keyframe',1000,function(){
		// code to run with 1 second delay after keyframe 1

	// keyframe 3
	}).okayNowThis('keyframe',500,function(){
		// code to run with half second delay after keyframe 2

	});

});
```

#### Pause
Does what it says on the box. Works by cloning the queue attached to the staging element so we can re-attached later.
```javascript
$('.pause').on('click',function(){
	$('#yourstage').okayNowThis('pause',function(){
		// do something on pause, like show our resume button!
	});
});
```

#### Resume
Resume will re-attach the queue and re-add the plugin classes to the staging element.
```javascript
$('.resume').on('click',function(){
	$('#yourstage').okayNowThis('resume',function(){
		// do something on resume, like show our pause button!
	});
});
```

#### Reset
Reset will delete the queue and remove the plugin classes attached to the staging element.
```javascript
$('.reset').on('click',function(){
	$('#yourstage').okayNowThis('reset',function(){
		// do something on reset, like clean up all the mess we probably made!
	});
});
```

## Classes
There are 3 classes added to the staging element
* okayNowThis-playing
* okayNowThis-paused
* keyframe-x (where x is the current keyframe number)
