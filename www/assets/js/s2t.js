var speech = {
	kit : null,
	on : false,
	remaining : 0,
	prepare : function() {
		if (!('webkitSpeechRecognition' in window)) {
			console.log("fail");
		}
		else if (speech.kit === null) {
			speech.init();
		}
	},

	init : function() {
		speech.kit = new webkitSpeechRecognition();
		speech.kit.lang = speech.lang;
		speech.kit.continuous = false;
		speech.kit.interimResults = false;

		speech.kit.onstart = function() {
			speech.on = true;
		};
		speech.kit.onresult = function(event) {
			speech.remaining = 0;
			var list = event.results;
			var transcript = "";
			for (var i=0; i<list.length; i++) {
				if (event.results[i].isFinal) {
					transcript += event.results[i][0].transcript;
				}
				else {
					transcript += event.results[i][0].transcript;
				}
			}
			if (transcript.trim()) {
				// a.innerHTML = transcript;
				console.log(transcript);
				// var param = parseUrlSearch();
				// sendMessage({
					// type    : "forward",
					// message : transcript,
					// forward : "speech",
					// line    : param.line,
					// lang    : param.lang,
					// instance: param.instance,
				// });
			}
			else {
				speech.start();
			}
		};
		speech.kit.onerror = function(event) {
		};
		speech.kit.onend = function() {
			// speech.on = false;
			speech.kit.start();
			// speech.kit.stop();
		};
	},

	start : function() {
		if (!speech.on && speech.remaining < 10) {
			speech.remaining++;
			speech.lang = "en-US";
			speech.prepare();
			speech.kit.lang = speech.lang;
			if (speech.on) {
				speech.kit.stop();
			}
			speech.kit.start();
		}
	},
}

function trigger() {
	if (speech.kit && speech.on) {
		speech.on = false;
		speech.kit.stop();
	}
	else {
		speech.start();
	}
}

var startButton = document.createElement('input');
startButton.type = "button";
document.body.appendChild(startButton);
startButton.onclick = trigger;

startButton.style.display = 'inline-block'; // remove this and test

