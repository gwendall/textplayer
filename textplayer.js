(function($){
	jQuery.fn.textplayer = function(settings){

		var config = {
			autoPlay: true,
			btnPlay: null,
			btnPause: null,
			btnStop: null,
			slider: null,
			delay: 100,
			cursor: false
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
					$(config.slider).slider("value",typedText.length)				
				}
				if (typedText == targetText) {
					reading = 0;
					clearInterval(played);
				}
			},config.delay);			
		}
		
		return this.each(function(){
			if (config.cursor == true) {
				marked = setInterval(function() {
					if (reading) {
						container.css("border-right","black solid thin");							
					} else {
						if (container.css("border-right-color") == "rgb(0, 0, 0)") {
							container.css("border-right","transparent solid thin");
						} else {
							container.css("border-right","black solid thin");							
						}
					}
				},500);
			}
			if (config.slider) {
				$(config.slider).slider({
					value: 0,
					min: 0,
					max: container.attr("data-text").length,
					step: 1,
					slide: function(event, ui) {
						container.html(container.attr("data-text").substring(0,ui.value));	
					}
				});
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
					$(config.slider).slider("value",0)
					reading = 0;
					clearInterval(played);
				});
			}
		});
	};
})(jQuery);