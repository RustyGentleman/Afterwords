# Tech Experiments

I liked twiddling and fiddling. With all sorts of things. I liked learning how things worked, from the universe to the light in a fridge. And, as I assume is quite evident in all of this place, I also really liked _building_, _**creating**_ things.

So, I have here a few experiments, mostly in remaking things that already existed, just to see if I could do it, or small, unserious attempts at making things that didn't yet exist.

---

<style>
	.block img {
		display: block;
		margin: 1lh auto;
		height: 10lh;
		filter: brightness(0) contrast(.9) sepia(1);
	}
	#pl {
		height: auto;
		width: 80%;
		margin-block: -2lh -3lh;
		filter: contrast(0.9) brightness(0.6) sepia(1);
	}
</style>

## Husk (2022)

An experiment in creating a Discord bot for personal use. It was also involved in a small social experiment, wherein I printed QR codes with an invite to a server and dispensed them in various places around the university campus, for the mere purpose of... seeing who would join, and why. The server was also intended to be a place for people to talk about psychology and mental health.

The bot would address them as they joined, asking three questions and noting down their answers:

<img src="assets/husk-icon.png"/>

<p tac>
_1. You've found this place. Why did you come?_<br>
_2. What do you wish to find?_<br>
_3. Do you wish to stay?_
</p>

Only four people joined, one out of worry, and the rest, curiosity. It spawned some conversation, in most part about depression, social anxiety and certain kinds of trauma. However, I soon ceased the experiment due to a lack of interest.

---

## Chat History Grabber/Viewer (2022)

A two-part project, consisting of a webscript to compile chat histories on a certain social platform, and a small web utility for viewing said chat histories. These utilities also archived images, audio messages, and profile banners and avatars, as links or data URIs.

It was a fair bit of effort, and though no longer maintained, I was glad I made it. Archival was/is an important thing to me, it seems, and knowing others have used it to keep their memories is a nice thought, as well.

---

## TinyRPG (2022)

A short-lived attempt at making a very small and simple web-based RPG. It quickly turned, rather, into an exploration in noise-based procedural map generation - this was after <a href="?show=creation">Innerspace</a>.

---

## Jamusesshon (2022)

There was a time, before Discord stages, when the Goblin Horde was using a specific service for its watch party nights, and this service was... less than ideal, to say the least.

<img src="assets/jamusesshon-icon.png"/>

I wondered if I could code something similar, but much simpler - something made only for watching YouTube, and that, thus only needed to _synchronize_ the players clients between themselves. And so I did. And I named it Jamusesshon, because of a moment in a Game Grumps episode where Dan Avidan asks Arin Hanson what _"jam session"_ would be in Japanese.

It was my first foray into playing around with websockets; I accidentally leaked a YouTube API key and revoked it with no incident; one person forked it. That's about all that happened. As far as I could tell, it worked, though it was perhaps overzealous with the synchronization.

---

## Web Platformer (2022)

An attempt at programming the basics of a platforming game, in HTML/CSS/JS. I got stuck at collision. Collision is bullshit.

---

## Text-Based Game Project (2023)

Probably what my first attempt at a text-based game framework actually was, now that I'm stumbling into this. The first implementation of my Steptext module is also present.

<img src="assets/tbg.png" style="height: 6lh"/>

The interface is also notably similar to most similar things I've done. Huh.

---

## Campus map (2023)

A layered, web-based map of the university campus. Done for a class, though I had hoped for it to become a maintained project. Included a view of where each classroom is, as well as options for viewing one's schedule. Pathfinding from class to class and gathering information from the campus servers were planned features.

---

## Particle Life (2023)

After watching a very interesting and compelling video on cellular automata and particle simulations, I, of course, had to attempt one myself. And I did. And it worked, though it wasn't very well optimized. Still, it was quite fun to make.

<img id="pl" src="assets/pl.png"/>

Some challenges included taking edge wrapping into account on calculations, and minimizing the number of calculations made each frame.

---

## MDComp (2023)

A regex-based Markdown-to-HTML compiler in Javascript. Mostly because it felt easy, and would make creating pages for my worldbuilding project website quicker. I didn't end up using it for that, but I am using it for this website.

tacThis is literally running on your computer with each page you load.