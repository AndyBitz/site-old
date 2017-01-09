!function(){

	console.info('hello ^•^/');

	const quote		= document.querySelector('.quote');

	const quotes	= [
		`<h3><span style="font-size: 1.4em; transform: translate(-5px, -11px);">Alas,</span><span style="transform: translateX(10px);">nothing happend.</span></h3>`,
		`<h3><span style="font-size: 1.4em;">HK,</span><span style="transform: translate(12px, 7px); font-weight: normal;">do you know what <span style="font-weight: 700;">love</span> is?</span></h3>`,
		`<h3><span style="font-weight: 700; transform: translate(-11px, -10px);font-size: 1.4em;">Tuturuuuu,</span><span>Okarin</span></h3>`,
		`<h3><span>Cheeki Breeki</span></h3>`,
		`<h3><span style="font-weight: 700; transform: translate(111px, -36px);">STAIRS???!!</span><span style="transform: translate(10px, 0px);">noOOOOOOOooooooOOoooOoooo!!!!</span></h3>`,
		`<h3><span style="transform: translate(71px, -22px);">If anyone tries to capture me,</span><span style="transform: translate(-61px, 12px);">I'll <span style="font-weight: 700; color: #D84315">incinerate</span> their brain.</span></h3>`,
		`<h3><span style="font-weight: 700;">Git Gud</span></h3>`,
		`<h3><span style="font-weight: 700; color: #D32F2F;">YOU DIED</span></h3>`,
		`<h3><span style="font-weight: 700;">hello <span style="font-family: 'Arial', sans-serif;">^•^/</span></span></h3>`,
		`<h3><span style="font-weight: 700; color: #D32F2F">&lt;3</span></h3>`,
		`<h3><span style="font-weight: 700;">今日は</span></h3>`,
		`<h3><span style="font-family: 'Roboto Mono', monospace; font-weight: 700;">F12</span></h3>`,
		`<h3><span style="font-size: .7em; font-family: 'Roboto Mono', monospace;">&gt;del /S /Q C:\\windows\\system32\\</span></h3>`,
		`<h3><span>Outdated <span style="font-weight: 700;">memes</span> destroy society.</span></h3>`,
		`<h3><span style="transform: translate(127px, -18px);">We are not retreating,</span><span style="transform: translate(-26px, 15px);"> we are advancing in reverse.</span></h3>`,
		`<h3><span>Wololo</span></h3>`,
		`<h3><span>durararararararara</span></h3>`,
		`<h3><span style="font-family: 'Roboto Mono', monospace;">0xdeadbeef</span></h3>`,
		`<h3><span style="font-family: 'Roboto Mono', monospace;">&gt;git commit suicide</span><br><span style="font-size: .5em;">Thats how you delete a repo.</span></h3>`,
		`<h3><span>Tabs > Spaces</span><br><span style="font-size: .5em;">Don't judge me.</span></h3>`,
		`<h3 style="perspective: 400px;"><span style="transform: rotateY(46deg);">ニャアアアアアアアアアアアア</span></h3>`,
		`<h3><span>KOTOR > The Movies</span><br><span style="font-size: .4em;">my opinion</span></h3>`,
		`<h3><span style="transform: translate(-28px, -14px);">I wonder if I plant you in the ground,</span><br><span style="transform: translate(94px, -14px);">if you will grow taller?</span></h3>`,
		`<h3><span>Здравствуйте!</span></h3>`, // Zdravstvuyte!
		`<h3><span style="font-weight: 700;">Slytherin <span style="font-weight: normal;">or</span> Ravenclaw</span><br><span style="font-size: .4em;">please, no Hufflepuff</span></h3>`,
		`<h3><span style="font-weight: 700;">IZZZZAAAAAAYYYYYY&#8203;AAAAAAAAAAAA!!!!</span></h3>`,
		`<h3><span style="font-weight: 700;"><span style="color: #bd8aab">Clown</span> <span style="color: #679f46;">Prince</span> <span style="color: 	#c3040d;">of</span> <span style="color: #2e0527;">Crime</span></span></h3>`,
		`<h3><span style="font-weight: 700;">RULES OF NATURE</span></h3>`,
		`<h3><span style="font-weight: 700;">METAL GEAR?!</span></h3>`,
		`<h3><span style="font-weight: 700; color: #D32F2F;">Chimichangas!</span></h3>`,
		`<h3><span>We did it reddit.</span></h3>`,
		`<h3><span>This is not meth.</span></h3>`,
		`<h3><span style="font-size: .7em;"><span style="margin-bottom: 6px; color: #D81B60;">Hi. What do you play?</span><br><span style="color: #3F51B5;">Wow, um. Zelda, Tetris...<br>... That's kind of a big question.</span></span></h3>`,
		`<h3><span style="font-family: 'Roboto Mono', monospace;">segmentation fault</span></h3>`,
		`<h3><span style="font-family: 'Roboto Mono', monospace;">xor rax, rax</span></h3>`,
		`<h3><span><span style="color: #CDDC39;">Flowers</span>, <span style="color: #3949AB;">Butterflies</span> and <span style="color: #D84315;">Dragons.</span></span></h3>`,
		`<h3><span>If I had a blog, I'd offend a lot of people.</span></h3>`,
		`<h3><span>I have way too much fun making these.</span></h3>`,
		`<h3><span>carry me senpai</span></h3>`,
		`<h3><span>*nosebleed*</span></h3>`,
		`<h3><span>shizuo chan <span style="font-family: 'Arial', sans-serif;">^•^</span></span></h3>`,
		`<h3><span><span style="font-size: 1.5em;">最高に、</span><span style="font-size: 1.3em;">最高に、</span><br><span><span style="font-size: 1.1em;">最高に</span>君達が大好きだ</span></span></h3>`,
		`<h3><span>Click the picture.</span></h3>`
	];

	let interval	= false;
	quote.innerHTML	= '';
	const children	= [];

	const showRandomQuote = (e)=>{

		const sel	= Math.floor(Math.random()*quotes.length);
		const tim	= 6000;
		const elm	= document.createElement('div');

		if (e) {
			let last_child = children.pop();
			last_child.className = 'hide';
			setTimeout(()=>{
				last_child.remove();
			}, tim);
		} else {
			children.pop();
		}

		children.push(elm);
		elm.innerHTML = quotes[sel];
		quote.appendChild(elm);

		setTimeout(()=>{
			if (elm) {
				elm.className = 'hide';
				setTimeout(()=>{
					if (elm)
						elm.remove();
				}, tim);
			}
		}, tim);

		if (!interval) {
			interval = setInterval(showRandomQuote, tim);
		}

		if (e != undefined && interval) {
			clearInterval(interval);
			interval = setInterval(showRandomQuote, tim);
		}
	
	};

	showRandomQuote();
	document.querySelector('.avatar').addEventListener('click', showRandomQuote);

	// quote.innerHTML = '<div>' + quotes[25] + '</div>';

}();
