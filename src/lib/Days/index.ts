import Day1 from './Day1.svelte'
import Day2 from './Day2.svelte'
import Day3 from './Day3.svelte'
import Day4 from './Day4.svelte'
import Day5 from './Day5.svelte'
import Day6 from './Day6.svelte'
import Day7 from './Day7.svelte'
import Day8 from './Day8.svelte'
import Day9 from './Day9.svelte'
import Day10 from './Day10.svelte'
import Day11 from './Day11.svelte'
// import Day12 from './Day12.svelte'

interface Day {
	title: string
	text: string
	component: typeof Day1
}

export default [
	undefined, // Days start at 1
	{
		title: 'Naughty or Nice',
		text: `The Elves have been tirelessly creating presents all year round. They're right on schedule, but today they've run into a big problem; the ancient system for tracking who's been naughty or nice is out of commission. With the hundreds of thousands of letters from children piling up alongside their records of good and bad deeds, the Elves are in dire need of a modern solution.

	Your mission is to build a system for the elves, enabling them to input names and tally each childs deeds to keep track of whether they're good or bad. You could even categorise these automatically as “naughty” and “nice.” Fortunately, the elves have been meticulous in their record-keeping and have a backup of all the current data in JSON format. You'll need to import this data into your newly developed system.
	
	Here is an example of what the Elves have stored:`,
		component: Day1,
	},
	{
		title: 'Merry Munch-o-Meter',
		text: `As the clock ticks down to Christmas Eve, Santa is preparing to eat all the cookies left by children all over the world. But amidst the holiday cheer, a small problem has arisen – how can we keep track of how many cookies Santa has munched!

	You've been tasked with creating a Cookie Counter which can show the tally of cookies munched. We should also be able to add, remove, and reset the count. Svelte Bot, in it's wisdom, recommends exploring the dynamic world of Svelte transitions/animations to level up your creation.
	
	If you're up for it, you could consider adding a feature that shows Santa's mood based on the number of cookies eaten – maybe he gets a little merrier with each cookie!`,
		component: Day2,
	},
	{
		title: 'Jingle Bell Balancer',
		text: `With the elves now back busily crafting gifts and the festive atmosphere at its peak, attention shifts to the crucial task of loading Santa's sleigh. However, Svelte Bot, with it's precise calculations, has brought to light a critical limitation: Santa's sleigh can carry a maximum load of only 100 kg per journey.

	Your mission is to help the Elves solve this crucial task. You'll be in charge of creating a Sleigh Load Balancer (SLB™), a tool designed to ensure that the sleigh is packed efficiently without exceeding its maximum capacity.
	
	The Elves have kept a meticulous record of all the children and the weight of their presents in a JSON format. It's your job to use this data to help keep the Sleigh within it's new operating weight. You should create a tool where Santa can choose whose presents to include on his run. The tool should show the current sleigh load and if the maximum of 100kg has been exceeded.
	
	As a bonus you could include an exciting data visualisation, or even a drag and drop interface!
	
	Here is an example of what the Elves have stored:
	
	[
		{ "name": "Kurtis", "weight": 8.20 },
		{ "name": "Branson", "weight": 4.31 },
		{ "name": "Danielle", "weight": 7.40 },
		{ "name": "Wanda", "weight": 7.04 },
		{ "name": "Claud", "weight": 4.93 },
		...
	]
	You can fetch this data by making a GET request to https://advent.sveltesociety.dev/data/2023/day-three.json`,
		component: Day3,
	},
	{
		title: 'Heart of Christmas',
		text: `In this particularly bustling holiday season, the focus at the North Pole has shifted towards a crucial aspect of the Christmas operation: the well-being of Santa Claus. This year, they want to set up a special system to monitor Santa's heart rate throughout the day, to ensure he stays healthy and jolly!

	You've been tasked with taking in the raw data to create Santa's Heart Rate Monitor (SHRM™). This system will utilize real-time data from the North Pole Health Database. The elves envision a dashboard that not only displays the live heart rate of Santa but also calculates and shows an average over specified periods. Additionally, if you're up to it they are keen on a historical view that charts Santa's heart rate over the course of the day, offering insights into how various activities and moments affect him.
	
	Svelte Bot setup a JSON endpoint for you to get the live data, which updates every second: https://advent.sveltesociety.dev/data/2023/day-four.json. Here is what that data looks like:
	
	{
		"heartRate" : 65
	}`,
		component: Day4,
	},
	{
		title: 'Present Progress',
		text: `Despite the preparation for Christmas kicking off early in the year, the Elves are behind schedule. Santa, ever so reliant on their craftsmanship, turns to you for a solution. Svelte Bot, with its keen understanding of data-driven solutions, suggests building an “Elf Productivity Dashboard”.

	This dashboard, powered by Svelte's reactive magic, will provide real-time insights into the elves' workflow. There are two primary tasks that we're tracking, represented in the JSON data by “CREATED_TOY” and “WRAPPED_PRESENT”. You'll can tap into information such as the number of toys produced per hour, the time taken for each toy, and the elves' task completion rates. Your mission is to visualise this data in an engaging and interactive way, and show the data in realtime as it'll be changing throughout the day.
	
	Svelte Bot setup a JSON endpoint for you to get the live data, which updates every second: https://advent.sveltesociety.dev/data/2023/day-five.json. Here is what that data looks like:
	
	[
		{
			"elf": "Ashlynn",
			"task": "WRAPPED_PRESENT",
			"minutesTaken": 3,
			"date": "2024-01-05T00:3:00.000Z"
		},
		{
			"elf": "Ashlynn",
			"task": "CREATED_TOY",
			"minutesTaken": 15,
			"date": "2024-01-05T00:18:00.000Z"
		}
	]
	Or as a TypeScript type:
	
	type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT'
	
	interface Task {
		elf: string
		task: TaskType
		minutesTaken: number
			date: string;
	}`,
		component: Day5,
	},
	{
		title: 'Misteltoe Metronome',
		text: `Following the successful launch of the productivity dashboard for the Elves, Svelte Bot has proposed an exciting follow-up project to keep the North Pole workshop buzzing with energy and rhythm. This new challenge involves creating a Beats Per Minute (BPM) Counter, a tool that will enable the Elves to tap along to their favorite Christmas tunes while they work. This innovative counter will provide real-time feedback on the tempo of the music, with each tap by an Elf registering as a beat.

	The BPM Counter should dynamically calculate and display the BPM, updating instantly with each tap to match the current beat of the song. A reset button is essential, allowing the Elves to start a fresh count for each new tune. For an extra touch you could consider including a selection of classic Christmas songs into the system, perhaps through embedding YouTube videos. This feature will allow the Elves to choose a song and use your BPM counter to stay in sync with its rhythm, adding a musical twist to their festive productivity!`,
		component: Day6,
	},
	{
		title: 'Morse Mischeif',
		text: `Building on the success of the recent North Pole technological initiatives, Santa has encountered a unique communication challenge. He needs to connect with Sven, one of his top reindeer trainers based in Iceland. However, with the sleigh currently unavailable, Santa must resort to a more unconventional method of communication. Sven, known for his eccentric but effective training methods, swears by the use of Morse code, believing it keeps his reindeer more alert and attentive (he insists they respond better to beeps and boops).

	Your mission, should you choose to accept it, is to create a Morse Code Translator. The translator should have a text input and an output section that displays the corresponding Morse code translation. Fortunately, the all knowing Svelte bot has provided you with the international morse code alphabet above.
	
	Each letter and number can be translated into a sequence of dots (.) and dashes (-), with the space key represented by a forward slash (/). For example, “Hello World” can be written as:
	
	.... . .-.. .-.. --- / .-- --- .-. .-.. -..
	A famous Elf engineer suggested that we could use the AudioContext API to generate audible bleeps and bloops to aid in the sending of the message. Svelte Bot found a recording of the message “Hello World” you could use as a reference:`,
		component: Day7,
	},
	{
		title: "Santa's Mysterious Deck of Doubles",
		text: `Under the shimmering aurora of the North Pole night, Santa made a captivating discovery that sparked a twinkle in his eye. Tucked away beneath a collection of ancient maps in his cozy study, he unearthed a set of playing cards, each pair graced with enchanting intricate designs. This Deck of Doubles, consisting of 24 unique pairs, was unlike anything Santa had ever seen.

	Intrigued by this mysterious find, Santa, known for his love of puzzles and games, saw an opportunity for a delightful pre-Christmas activity. He decided to turn this Deck of Doubles into a memory game, a fun way to keep himself and Mrs. Claus sharp during the bustling holiday season.
	
	Your challenge is to bring Santa's idea to life by creating a digital memory game based on this magical deck. The game involves flipping over two cards at a time, with the aim of finding matching pairs. He'd like the game to include a feature for keeping track of the high score and a timer to measure how quickly players can match all pairs.
	
	You can find the pictures for the cards by visiting https://advent.sveltesociety.dev/data/2023/day-eight/NUMBER.png where NUMBER is a number from 1 to 24 inclusive.`,
		component: Day8,
	},
	{
		title: "Santa's Final Countdown",
		text: `As Christmas Eve rapidly approaches, the North Pole is abuzz with excitement and festive preparations. However, Svelte Bot has realized that amidst all the hustle and bustle, they've lost track of the exact countdown to the big night. The old, trusty mechanical countdown clock, a centerpiece in Santa's workshop for decades, has finally ticked its last tock. With everyone so busy making toys and preparing the sleigh, we need this vital tool to keep everyone aligned and on schedule.

	Your mission is to create a modern digital solution that accurately counts down to the stroke of midnight on Christmas Eve. This countdown timer should be visually festive and engaging, displaying the remaining days, hours, minutes, and seconds in a way that adds to the holiday spirit. Santa and the elves are counting on you to bring this crucial piece of Christmas technology to life, ensuring that the magic of Christmas Eve unfolds perfectly on time.
	
	`,
		component: Day9,
	},
	{
		title: 'Pop-up! Spreading the holiday cheer',
		text: `In the quest to spread the festive spirit of Christmas to every corner of the globe, the North Pole has conceived a delightful new initiative. This year, Santa has unveiled a new initative: a Holiday Greeting Pop-Up designed for seamless integration into websites. Upon visiting a site, this pop-up will show after a brief interval, showcasing a heartwarming holiday message straight from Santa!

Your task is to bring Santa's vision to life by creating this pop-up. It should feature a jolly image of Santa Claus, along with a warm, festive message wishing the visitor a Merry Christmas and happy holidays.

You could also transform this Holiday Greeting Pop-Up into an installable package and publish it on GitHub or NPM. This will allow web developers to easily integrate the pop-up into their projects by installing your package.`,
		component: Day10,
	},
	{
		title: 'Tinsel Transformers',
		text: `In the midst of their bustling gift-making, the elves have come up with a delightful idea for you to tinker with: a Elf Name Generator! They're thrilled with their idea but need a bit of tech magic to make it happen, which is where you come in.

	This tool will allow anyone to enter their “Human name” and receive a unique, elf-inspired name in return. It's a wonderful way for people everywhere to feel connected to the magic of the North Pole!
	
	For example, if your human name is “Rich Harris”, your elf name could be something like “Peppermint Merryweather”. You'll need to create an algorithm to match names. You could base this on the letters in the user's name, their length, or even add a touch of randomness for extra fun. Once the user inputs their name and the generator works its magic, display their new elf name in a festive font.
	
	The Elves have collaborated with Svelte Bot to prepare a list of suitable Elf names that you can fetch here: https://advent.sveltesociety.dev/data/2023/day-eleven.json
	
	The TypeScript type for this data is:
	
	interface NamesList {
			firstNames: string[];
			lastNames: string[];
	}`,
		component: Day11,
	},
	// {
	// 	title: 'Greetings and Salutations',
	// 	text: `It's time to start sending out Christmas cards to ensure they arrive in time for Christmas Day, but with the added rush at the North Pole no one has had time to design a card! Santa has requested the creation of a digital Christmas card creator.

	// Your mission is to build an interactive application that allows users to design their own Christmas cards with ease. Embrace the festive spirit and Svelte's capabilities to create a tool where elements can be effortlessly dragged, dropped, and arranged into beautiful holiday greetings.

	// The elves have drawn some decorations for use in your Christmas card creator. Feel free to add more drawings if you'd like! Implement an intuitive drag-and-drop interface where users can select, move, and place elements anywhere on the card.

	// If you're up to the task, you could also allow users to add personalized messages with different fonts, sizes, and colors. Include festive font styles to enhance the holiday feel. Google Fonts has some fonts that suit santas taste!

	// You can find the decorations by visiting https://advent.sveltesociety.dev/data/2023/day-twelve/NUMBER.png where NUMBER is a number from 1 to 11 inclusive.`,
	// 	component: Day12,
	// },
] satisfies (Day | undefined)[]
