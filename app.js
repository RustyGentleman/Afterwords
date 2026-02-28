//# Generators
fetch(location.origin + location.pathname)
	.then(res => {
		return res.text()
	})
	.then(html => {
		document.querySelector('header').innerHTML = html.match(/<header>([\s\S]*)<\/header>/)[1]
		setTimeout(() => {
			document.querySelector('header').querySelectorAll('.dropdown').forEach(dd => {
				dd.addEventListener('mouseenter', () => dd.classList.add('h'))
				dd.addEventListener('mouseleave', () => dd.classList.remove('h'))
			})
		}, 10)
	})
load()

// //# Link fixer
// setTimeout(() => {
// 	if (location.href.includes('github'))
// 		for (const a of document.querySelectorAll('a'))
// 			a.setAttribute('href', '/Afterwords' + a.getAttribute('href'))
// }, 100)
//# Consts
const replacements = {
	'^\\links([^#<>]+?)$': ['\t<p l>$1</p>', 'gm'],
	//? Markers
	'\\n---\\n': ['</div><div class="divider"></div><div class="block">', 'g'],
	//? Headers
	'###> (.*) \\\\?\\{#?(.*)\\}': ['<h3 ntac id="$2">$1</h3>', 'gm'],
	'##> (.*) \\\\?\\{#?(.*)\\}': ['<h2 ntac id="$2">$1</h2>', 'gm'],
	'#> (.*) \\\\?\\{#?(.*)\\}': ['<h1 ntac id="$2">$1</h1>', 'gm'],
	'###> (.*)': ['<h3 ntac>$1</h3>', 'gm'],
	'##> (.*)': ['<h2 ntac>$1</h2>', 'gm'],
	'#> (.*)': ['<h1 ntac>$1</h1>', 'gm'],
	'### (.*) \\\\?\\{#?(.*)\\}': ['<h3 id="$2">$1</h3>', 'gm'],
	'## (.*) \\\\?\\{#?(.*)\\}': ['<h2 id="$2">$1</h2>', 'gm'],
	'# (.*) \\\\?\\{#?(.*)\\}': ['<h1 id="$2">$1</h1>', 'gm'],
	'### (.*)': ['<h3>$1</h3>', 'gm'],
	'## (.*)': ['<h2>$1</h2>', 'gm'],
	'# (.*)': ['<h1>$1</h1>', 'gm'],
	//? Lists
	'^- (.*)$': ['\t<li>$1</li>', 'gm'],
	'((\\t?<li>.*<\\/li>\\s{2})+)': ['<ul>\n$1</ul>\n', 'g'],
	//? Block quotes
	'^> (.*)': ['\t<blockquote>$1</blockquote>', 'gm'],
	//? Text styling
	'\\*\\*(.*?)\\*\\*': ['<b>$1</b>', 'g'],
	'__(.*?)__': ['<u>$1</u>', 'g'],
	'[\\*_](.*?)[\\*_]': ['<i>$1</i>', 'g'],
	'~~(.*?)~~': ['<s>$1</s>', 'g'],
	'\\[([^[].*?)\\]\\((.*?)\\)': ['<a href="$2">$1</a>', 'g'],
	'>>(.*?)<<': ['<small>$1</small>', 'g'],
	'\\|\\|(.*?)\\|\\|': ['<span tabindex="0" class="spoiler">$1</span>', 'g'],
	//? Paragraphs
	'^\\ntac(.+?)$': ['\t<p tac>$1</p>', 'gm'],
	'^\\n([^#<>]+?)$': ['\t<p>$1</p>', 'gm'],
	// '': ['', 'g'],
}
//# Helpers
function renderMD(text) {
	let rendered = text

	//? Preprocessing
	rendered = rendered
		.replaceAll(/\r/g, '')
		.replaceAll(/\\n/g, '\\\\n')

	//? Rendering
	for (const [find, [replace, tags]] of Object.entries(replacements)) {
		const regex = new RegExp(find, tags)
		const match = rendered.match(regex)
		rendered = rendered.replace(regex, replace)
	}

	//? Postprodessing
	rendered = rendered
		.replaceAll('\\\\n', '<br>')
	return rendered
}
async function load() {
	const page = new URLSearchParams(location.search).get('page')
	document.querySelector('.body-inner').innerHTML = `<insert data-file="${page?? 'home'}.md"></insert>`

	await new Promise(r => setTimeout(r, 1))

	document.querySelectorAll('insert').forEach(insert => {
		const page = new URLSearchParams(location.search).get('page')
		let file = insert.dataset.file?? (page? page+'.md' : 'home.md')

		let prefix = ''
		if (location.href.includes('github'))
			prefix = '/Afterwords'

		fetch(prefix + '/mds/' + file)
			.then(res => {
				if (!res.ok) throw new Error("Failed to load markdown")
				return res.text()
			})
			.then(md => {
				const rendered = renderMD(md)
				insert.outerHTML = `<div data-inserted="${file}"><div class="block">${rendered}</div></div>`
				switch (file) {
					case 'ras.md':
						document.querySelectorAll('h1 + p:not(:has(:not(a)))').forEach(e => {
							e.outerHTML = `<p l tac>${e.innerHTML}</p>`
						})
						break
				}
			})
			.then(() => {
				document.querySelector('body .body-inner').querySelectorAll('script').forEach(s => {
					eval(s.innerHTML)
				})
			})
			.catch(err => {
				console.error(err)
			})
	})
}
//# Page codes
function loadGallery() {
	const g = document.querySelector('.gallery.drawings')
	g.classList.add('active')
	let files = [
		'2014-03-19.jpg',
		'2014-08-18.jpg',
		'2015-03-06-1.jpg',
		'2015-03-06.jpg',
		'2015-04-08.jpg',
		'2015-05-03-1.jpg',
		'2015-05-03.jpg',
		'2015-06-12.jpg',
		'2015-07-10.jpg',
		'2015-07-23-1.jpg',
		'2015-07-23.jpg',
		'2015-07-25.jpg',
		'2015-08-18.jpg',
		'2015-08-22.jpg',
		'2016-03-21-1.jpg',
		'2016-03-21-2.jpg',
		'2016-03-21.jpg',
		'2016-05-05.jpg',
		'2017-04-24.jpg',
		'2018-03-24-1.jpg',
		'2018-03-24.jpg',
		'2018-10-21.jpg',
		'2018-10-29.jpg',
		'2019-03-20.jpg',
		'2019-03-27.jpg',
		'2019-07-01.jpg',
		'2021-01-07.jpg',
		'2021-01-25-1.jpg',
		'2021-01-25-2.jpg',
		'2021-01-25-3.jpg',
		'2021-01-25-4.jpg',
		'2021-01-25.jpg',
		'2023-05-28-1.jpg',
		'2023-05-28.jpg',
		'2024-07-20.jpg',
		'2025-01-04.png',
		'2025-03-18.jpg',
		'2025-03-24.jpg',
	]
	for (const i in files) {
		if (location.href.includes('github'))
			files[i] = `<img src="/Afterwords/assets/drawings/${files[i]}" draggable="false" style="z-index: 0"/>`
		else
			files[i] = `<img src="/assets/drawings/${files[i]}" draggable="false" style="z-index: 0"/>`
	}
	g.innerHTML = files.join('')
	setTimeout(() => {
		for (const img of g.querySelectorAll('img')) {
			img.style.setProperty('--x', (Math.random() * 100 - 50).toFixed())
			img.style.setProperty('--y', (Math.random() * 250 - 125).toFixed())
			img.style.setProperty('--r', (Math.random() * 40 - 20))
		}
		let startX, startY, target
		let topZ = 1
		let offsetX = 0
		let offsetY = 0
		g.addEventListener('mousedown', e => {
			startX = e.pageX
			startY = e.pageY
			target = e.target
			offsetX = +e.target.style.getPropertyValue(`--ox`)
			offsetY = +e.target.style.getPropertyValue(`--oy`)
			target.style.zIndex = ++topZ
			g.addEventListener('mousemove', move)
			g.addEventListener('mouseup', () => {
				g.removeEventListener('mousemove', move)
				startX = undefined
				startY = undefined
			})
		})
		function move(e) {
			const dx = e.pageX - startX
			const dy = e.pageY - startY
			if (offsetX === undefined) offsetX = 0;
			if (offsetY === undefined) offsetY = 0;
			offsetX += dx
			offsetY += dy
			target.style.setProperty('--ox', offsetX)
			target.style.setProperty('--oy', offsetY)
			startX = e.pageX
			startY = e.pageY
		}
	})
}
{
	const files = {
		og: [
			'titris.mp3',
			'incantation.mp3',
			'melancholy.mp3',
			'limbo.mp3',
			'cheer.mp3',
			'a-moment-of-clarity.mp3',
			'lament.mp3',
			'drowning-in-tranquility.mp3',
			'i-will-never-change.mp3',
			'false-hopes.mp3',
			'marred-marsh.mp3',
			'screaming-abyss--melody1-1.mp3',
			'screaming-abyss--melody2-1.mp3',
			'bass+piano.mp3',
			'drippydrip.mp3',
			'house.mp3',
			'silly-drum-n-flute.mp3',
		],
		remakes: [
			'home-native.mp3',
			'home-warmth.mp3',
			'lazerhawk-so-far-away.mp3',
			'bmsr-just-for-the-night.mp3',
			'gorillaz-broken.mp3',
			'porter-robinson-easier-to-love-you.mp3',
			'jake-kaufman-starlit-wilds.mp3',
			'qotsa-head-like-a-haunted-house.mp3',
			'savant-once-upon-a-time.mp3',
			'tobacco-six-royal-vipers.mp3',
			'mbr-dma-6-scsi-host-adapter.mp3',
		],
		bits: [
			'5-4-beat.mp3',
			'7-4-beat.mp3',
			'showerComposition2.mp3',
			'drumloopthing.mp3',
			'highbits2.mp3',
			'howsmokewithnolighter.mp3',
			'mtron1.mp3',
			'procedural1.mp3',
			'totheend2.mp3',
			'obrienmustsuffer.mp3',
		],
		acapella: [
			"i'd rather be.mp3",
			'ijustwannafeelsomething.mp3',
			'cockroach-king-verse1-bridge.mp3',
			'lapse.mp3',
			'haken-puzzlebox.mp3',
			'puzzlebox.mp3',
			'becauseitsthere.mp3',
			'beneath-the-white-rainbow.mp3',
			'boundbygravity-outro.mp3',
			'boundbygravity-outro+inst.mp3',
			'crumblingcastle-layered.mp3',
			'pareidolia.mp3',
			'somebody-snip.mp3',
			'themindseye1.mp3',
			'themindseye2.mp3',
			'themindseye-full.mp3',
			'visions.mp3',
			'native construct - the spark of the archon.mp3',
			'nativeconstruct-chromaticaberration-doowop.mp3',
			'hunnybee.mp3',
			'jam-growwingsandfly-joeyverse.mp3',
			'areyoumine.mp3',
			'blackbird.mp3',
			'lightshower.mp3',
			'outtasightouttamind-outro.mp3',
			'porterrobinson-somethingcomforting.mp3',
			'strangemanwithbi-coloredsideburnsplayingcharlygarciaintheeighties.mp3',
			'symptomoflife.mp3',
			'virtualinsanity.mp3',
			'whydyouonlycallmewhenyourehigh.mp3',
			'spidermaaaaaaaaaaaaaaaaaaaaaan.mp3',
			"thebrain'samotorcycle-ext.mp3",
		],
	}
	function loadPlaylist(btn) {
		const dir = btn.parentElement.id
		const playlist = []
		for (const file of files[dir]) {
			// playlist.push(`<div>
			// 	<button onclick="play(this)">▶</button>
			// 	<span>?:?? / ?:??</span>
			// 	<input type="range" min="0" max="100" step="1" value="50"></input>
			// 	<div></div>
			// 	<audio src="/assets/music/${dir}/${file}" controlslist="noplaybackrate nodownload" preload="metadata"></audio>
			// </div>`)
			if (location.href.includes('github'))
				playlist.push(`<div class="block"><span>${file}</span><audio src="/Afterwords/assets/music/${dir}/${file}" controls controlslist="noplaybackrate nodownload" preload="metadata"></audio></div>`)
			else
				playlist.push(`<div class="block"><span>${file}</span><audio src="/assets/music/${dir}/${file}" controls controlslist="noplaybackrate nodownload" preload="metadata"></audio></div>`)
		}
		btn.parentElement.innerHTML = playlist.join('')
	}
}