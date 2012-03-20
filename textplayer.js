(function($){
	jQuery.fn.textplayer = function(settings){

		var config = {
			autoPlay: true,
			btnPlay: null,
			btnPause: null,
			btnStop: null,
			speed: 100,
			marker: true
		};
		if (settings){
			$.extend(config,settings);
		}

		var played;
		var marked;
		var reading = 0;
		var container = $(this);

		function playText() {
			played = setInterval(function() {
				reading = 1;
				var targetText = container.attr("data-text");
				var typedText = container.html() + targetText[container.html().length];
				if (typedText.length <= targetText.length) {
					container.html(typedText);					
				}
				if (typedText == targetText) {
					reading = 0;
					clearInterval(played);
				}
			},config.speed);			
		}
		
		return this.each(function(){
			if (config.marker == true) {
				marked = setInterval(function() {
					if (reading) {
						container.css("border-right","black solid thin");							
					} else {
						if (container.css("border-right-color") == "rgb(0, 0, 0)") {
							container.css("border-right","white solid thin");
						} else {
							container.css("border-right","black solid thin");							
						}
					}
				},500);
			}
			if (config.autoPlay == true) {
				playText();					
			}
			if (config.btnPlay) {
				$(config.btnPlay).click(function() {
					if (reading == 0) {
						playText();
					}
				});
			}
			if (config.btnPause) {
				$(config.btnPause).click(function() {
					reading = 0;
					clearInterval(played);
				});
			}
			if (config.btnStop) {
				$(config.btnStop).click(function() {
					container.html("");
					reading = 0;
					clearInterval(played);
				});
			}
		});
	};
})(jQuery);