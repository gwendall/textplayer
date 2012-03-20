#[textplayer.js](http://gwen.fm/textplayer)  (a jquery plugin to simulate live text typing)

textplayer.js lets you easily simulate live typing of a text.

[Check a live demo here](https://gwen.fm/textplayer)

##Basic installation

1) Create a container with the "data-text" attribute set to the value you want to be typed.

``` html
<div class="foobar" data-text="that's a nice text i'm typing right now."></div>
```

2) Indicate to javascript where the text container is:

``` js
$('.foobar').textplayer();
```

That's it!

##Options

You can indicate 

``` js
$(".foobar").textplayer({
	autoPlay: false, 		// default: true 
	btnPlay: "#play",		// default: null
	btnPause: "#pause",		// default: null
	btnStop: "#stop",		// default: null
	speed: 40,				// default: 100
	marker: false			// default: true
});
```

##Testing

Works fine on Chrome, Safari and Firefox.

##Contributing

I just started this project a few hours ago so it may definitely need improvements. Feel free to get in touch via Github/Twitter for suggestions or just start submitting patches!

##Follow me!

[@gwendall](https://twitter.com/gwendall)