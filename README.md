#[textplayer.js](http://gwendall.github.com/)  (a jquery plugin to simulate live text typing)

textplayer.js lets you easily simulate live typing of a text.

[Check a live demo here](http://gwendall.github.com/)

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

You can customize the behavior of your text with custom buttons, delays between each character typed and a flashing:

``` js
$(".foobar").textplayer({
	autoPlay: false, 		// default: true 
	btnPlay: "#play",		// default: null
	btnPause: "#pause",		// default: null
	btnStop: "#stop",		// default: null
	delay: 40,				// default: 100
	cursor: false			// default: true
});
```

##Testing

Tested and works fine on Chrome 17.0.963.79, Safari 5.0.5 and Firefox 10.0.2.

##Contributing

I just started this project a few hours ago so it may definitely need improvements. Feel free to get in touch via Github/Twitter for suggestions or just start submitting patches!

##Follow me!

[@gwendall](https://twitter.com/gwendall)