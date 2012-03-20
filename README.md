#[textplayer.js](http://gwendall.github.com/)  (a jquery plugin to simulate live text typing)

textplayer.js lets you easily simulate live typing of a text.

[Check a live demo here](http://gwendall.github.com/)

##Basic installation

1) Insert the jquery and jquery UI plugins.

``` html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/bootstrap UI/js/jquery-ui-1.8.16.custom.min.js"></script>
```

2) Create a container with the "data-text" attribute set to the value you want to be typed.

``` html
<div class="foobar" data-text="that's a nice text i'm typing right now."></div>
```

3) Indicate to javascript where the text container is:

``` js
$('.foobar').textplayer();
```

That's it!

##Options

You can customize the behavior of your text with custom buttons, delays between each character typed and a flashing cursor (in progress):

``` js
$(".foobar").textplayer({
	autoPlay: false, 		// default: true 
	btnPlay: "#play",		// default: null
	btnPause: "#pause",		// default: null
	btnStop: "#stop",		// default: null
	slider: "#slider",		// default: null
	delay: 40,				// default: 100
	cursor: false			// default: false
});
```

##Testing

Tested and works fine on Chrome 17.0.963.79, Safari 5.0.5 and Firefox 10.0.2.

##Contributing

I just started this project a few hours ago so it may definitely need improvements. Feel free to get in touch via Github/Twitter for suggestions or just start submitting patches!

##Follow me!

[@gwendall](https://twitter.com/gwendall)