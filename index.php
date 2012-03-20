<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/Article">
	<head>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
		<script src="textplayer.js" type="text/javascript"></script>
		<script>
			$(document).ready(function() {

				$("#foo").textplayer({
					autoPlay: false,
					btnPlay: "#play",
					btnPause: "#pause",
					btnStop: "#stop",
					speed: 40,
					marker: false
				});

			});
		</script>
	</head>
	<body>
		<button id="play">play</button>
		<button id="pause">pause</button>
		<button id="stop">stop</button>
		<div id="foo" data-text="When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris." 
		style="font-size:20px;display:table;"></div>
	</body>
</html>