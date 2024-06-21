var quotes = [
			"I long for the day when men will turn away from invisible monsters and once more embrace a more rational view of the world. But these new religions are so convenient - and promise such terrible punishment should one reject them - I worry that fear shall keep us stuck to what is surely the greatest lie ever told. - Altaïr Ibn-La'Ahad",
			"To Say That Everything Is Permitted Is To Understand That We Are The Architects Of Our Actions And That We Must Live With Their Consequences, Whether Glorious Or Tragic. - Ezio Auditore",
			"For years Ive been rushing around, taking whatever I fancied, not giving a tinkers curse for those I hurt. Yet here I am ... with riches and reputation, feeling no wiser than when I left home. Yet when I turn around, and look at the course Ive run ... here's not a man or woman that I love left standing beside me. - Edward Kenway",
			"Sometimes standing against evil is more important than defeating it. The greatest heroes stand because it is right to do so, not because they believe they will walk away with their lives. - Connor Kenway"

			]
var bgImage = ["altair.jpg","ezio.jpg","edward.jpg","connor.jpg"]

		function newQuote() {

			var randomNumber = Math.floor(Math.random() * (quotes.length));
			document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
			document.body.style.backgroundImage = 'url(' + bgImage[randomNumber] + ')';
			console.log(randomNumber);
		}
