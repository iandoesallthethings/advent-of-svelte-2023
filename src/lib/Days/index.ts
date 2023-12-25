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
import Day12 from './Day12.svelte'
import Day13 from './Day13.svelte'
import Day14 from './Day14.svelte'
import Day15 from './Day15.svelte'
import Day16 from './Day16.svelte'
import Day17 from './Day17.svelte'
import Day18 from './Day18.svelte'
import Day19 from './Day19.svelte'
import Day20 from './Day20.svelte'
import Day21 from './Day21.svelte'
import Day22 from './Day22.svelte'
import Day23 from './Day23.svelte'
import Day24 from './Day24.svelte'

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
	{
		component: Day12,
		title: 'Greetings and Salutations',
		text: `It's time to start sending out Christmas cards to ensure they arrive in time for Christmas Day, but with the added rush at the North Pole no one has had time to design a card! Santa has requested the creation of a digital Christmas card creator.

	Your mission is to build an interactive application that allows users to design their own Christmas cards with ease. Embrace the festive spirit and Svelte's capabilities to create a tool where elements can be effortlessly dragged, dropped, and arranged into beautiful holiday greetings.

	The elves have drawn some decorations for use in your Christmas card creator. Feel free to add more drawings if you'd like! Implement an intuitive drag-and-drop interface where users can select, move, and place elements anywhere on the card.

	If you're up to the task, you could also allow users to add personalized messages with different fonts, sizes, and colors. Include festive font styles to enhance the holiday feel. Google Fonts has some fonts that suit santas taste!

	You can find the decorations by visiting https://advent.sveltesociety.dev/data/2023/day-twelve/NUMBER.png where NUMBER is a number from 1 to 11 inclusive.`,
	},
	// 	{
	// 		title: 'Jingle Bell Balancer 2.0',
	// 		text: `Santa is very happy with the Sleigh Load Balancer (SLB™) - it revolutionised the way presents are loaded onto his sleigh, ensuring a smooth and efficient journey. However, as the holiday season approaches and the number of children around the world continues to grow, a new need has emerged. Santa now requires an automated solution to plan his deliveries. With millions of children eagerly awaiting their gifts, manual planning simply won't cut it anymore. It's time to take the SLB™ to the next level by automating the entire sleigh loading and route planning process.

	// 		The new load balancer needs to be able to group the list of children into deliveries automatically and present each run with the optimal selection of presents. Svelte Bot has suggested you add general statistics such as the average weight of the sled, and the number of deliveries!

	// 		Santa has tasked the SLB to handle 10,000 children at a time. You can fetch the test data of the first 10,000 children by making a GET request to https://advent.sveltesociety.dev/data/2023/day-thirteen.json.

	// 		The TypeScript type for this data is:

	// 		interface Present {
	// 				name: string;
	// 				weight: number;
	// 		}

	// 		type ResponseData = Present[]`,
	// 		component: Day13,
	// 	},
	// 	{
	// 		component: Day14,
	// 		title: 'Snowfall Symphony',
	// 		text: `In a captivating late-night discussion under the stunning northern lights, Santa and Svelte Bot found themselves engaged in a debate: Can the beauty of snow be captured digitally? To settle this debate, Svelte Bot has tasked you with creating a snowfall simulator.

	// 		Your task involves creating a versatile Snowfall component. It should allow customisation such as adjusting the quantity of snowflakes, and their speed. You may use any technology you prefer, though Svelte Bot recommends Svelte, CSS, and SVGs.`,
	// 	},
	// 	{
	// 		component: Day15,
	// 		title: 'Sparkling Snowglobes',
	// 		text: `As the elves huddled around the glowing workshop table, the idea struck them like a sparkling snowflake: why not take the Snowfall component we've made a step further and create a customisable Snow Globe!? The idea of being able to quickly design unique Snow Globes to send out to their friends and family filled them with excitement.

	// 	They've asked you to integrate your wonderful Snowfall component, and its various customisable options into a brilliant Snow Globe customiser. They would also like some additional ways to configure it which is up to your imagination. Svelte Bot has suggested you could add options like changing the colour, changing the decorations, and even adding your own background image.`,
	// 	},
	// 	{
	// 		component: Day16,
	// 		title: 'Lessons from Amazon™️',
	// 		text: `Santa is taking notes from the best. While Mrs Claus was watching TV, Santa overheard about Amazon's new warehouse robots and got inspired. He decided to move all the gifts already made into a giant hangar (it's actually 20x20, but don't tell Santa; he will be sad about it) and tasked you with teaching Svelte Bot how to fetch every gift.

	// Your job? Build a visual representation of the 20x20 hangar with all the gifts stacked on top of each other and a system for inputting commands into Svelte Bot on how to move from his starting point to the actual gift. You can fetch the list of gifts from https://advent.sveltesociety.dev/data/2023/day-sixteen.json.

	// The TypeScript type for this data is:

	// interface Present {
	// 	name: string
	// 	x: number // 1-20
	// 	y: number // 1-20
	// }

	// type ResponseData = Present[]`,
	// 	},
	// 	{
	// 		component: Day17,
	// 		title: 'Festive Funds',
	// 		text: `In the bustling North Pole, the elves are taking a short break from their work to buy presents for each other. They're excited about the idea but realise they need to be careful with their spending. To help them manage their budgets, Svelte Bot has come up with a brilliant idea: an app that keeps track of their Christmas shopping expenses. This app will be a real game-changer for the elves, ensuring they can buy thoughtful gifts without overspending.

	// 		Svelte Bot needs your help to build this app; it should allow each elf to input their total budget for gifts. Once the budget is set, the elves can then add each item they're planning to buy, along with its cost. The clever part of the app will be how it shows the elves the total amount of money they've spent so far and how much they have left. This way, they can easily see if they're sticking to their budget or if they need to rethink some of their gift choices.`,
	// 	},
	// 	{
	// 		component: Day18,
	// 		title: `Santa's Quiz`,
	// 		text: `Santa, always keen to share the rich history of the North Pole with the younger generation of elves, decided it was time for a fun and educational activity. He thought a quiz game would be a delightful way for the young elves to learn about their heritage and the many tales of the North Pole. Eager to make this idea a reality, Santa turned to you for help. He knew you had the skills to create something both engaging and informative. Your task is to develop a simple quiz game that would captivate the young elves and teach them in an interactive way.

	// 		To assist you in this endeavour, Svelte Bot has stepped in with a list of trivia questions about the North Pole in JSON format. Your challenge is to fetch these questions from the API and present them in a user-friendly multiple choice quiz format.

	// 		You can fetch this data by making a GET request to https://advent.sveltesociety.dev/data/2023/day-eighteen.json. It will return 20 random questions every time, each with four answers, one of which is correct.

	// 		The data as a TypeScript type is:

	// 		interface Question {
	// 				question: string;
	// 				answers: {
	// 						text: string;
	// 						correct: boolean;
	// 				}[]
	// 		}

	// 		type ResponseData = Question[];`,
	// 	},
	// 	{
	// 		component: Day19,
	// 		title: 'Polar Lights',
	// 		text: `Santa, always keen on brightening up the North Pole with new and exciting ideas, has come up with a plan to introduce Zigbee-controlled Christmas lights (he likes to own his devices). He envisions these lights to be not only spectacular in appearance but also highly customisable. To bring this vision to life, Santa needs a creative mind to design a prototype, and that's where you come in. Your challenge is to create a Christmas light simulator, a tool that will allow Santa to experiment with different designs and settings before the elves start building the actual lights.

	// 		Your simulator should be user-friendly and intuitive, enabling Santa to play around with various parameters. Consider including options to change the colours of the lights, their blinking patterns, intensity, and perhaps even the sequence in which they light up. Your simulator will be an essential tool in Santa's workshop, helping him to visualise and finalise the designs for these new, magical Christmas lights.`,
	// 	},
	// 	{
	// 		component: Day20,
	// 		title: 'Jingle Jokes',
	// 		text: `Late last night, Svelte Bot was exploring various Christmas traditions. During his research, he stumbled upon something that truly captivated his interest: Christmas Cracker Jokes. These jokes are a staple at many homes during Christmas, and he is keen to bring it early to the North Pole to keep spirits high.

	// 		He envisions a special button, one that, when pressed, would randomly select and display a joke from a collection of classic Christmas Cracker Jokes. As an added bonus, you could integrate the Web SpeechSynthesis API. This feature would enable the jokes to be read aloud, enhancing amusement and accessibility for everyone in the workshop.

	// 		You can fetch this data by making a GET request to https://advent.sveltesociety.dev/data/2023/day-twenty.json.

	// 		The data as a TypeScript type is:

	// 		type ResponseData = string[];`,
	// 	},
	// 	{
	// 		component: Day21,
	// 		title: 'Oh the weather outside is frightful',
	// 		text: `As Christmas nears, Santa is in a bit of trouble. His old barometer, which has been a big help over the years, has broken. Santa requires precise meteorological forecasts to navigate his near-light-speed sleigh journey across the globe. Luckily this year you're here to help. Your task is to build a simple Christmas themed weather app. You can use the Open-Meteo API for current weather updates and the Web Geolocation API to find the current location.`,
	// 	},
	// 	{
	// 		component: Day22,
	// 		title: 'Snowflake Silhouettes',
	// 		text: `The North Pole is a magical land full of snow, with each snowflake as unique as the individual it represents. In this magical challenge, your task is to bring to life a one-of-a-kind Snowflake Generator. This special tool will create a unique snowflake shape using the person's name as the basis or ‘seed' for the design. The pattern of the snowflake could be influenced by factors such as the length of the name, the characters used, and their arrangement. Optionally, you may also include a feature to download or copy the generated snowflake. For suggestions on how to build a snowflake generator, Svelte Bot recommends this tutorial to get started.`,
	// 	},
	// 	{
	// 		component: Day23,
	// 		title: 'ElfNet Social',
	// 		text: `In the enchanting realm of the North Pole, the Elves have made a significant leap into the world of technology by crafting ElfNet, their exclusive social network. This digital platform is brimming with the festive spirit of the holiday season. However, they've encountered a challenge: they need a way to effectively manage and interact with the ElfNet backend. They require your assistance to establish a seamless connection with their ElfDB, ensuring that posts are dynamically displayed as they are submitted throughout the day.

	// 		Svelte Bot setup a JSON endpoint for you to get the live data from ElfDB: https://advent.sveltesociety.dev/data/2023/day-twenty-three.json. Here is what that data looks like as a TypeScript type:

	// 		interface ElfPost {
	// 			id: string
	// 			author: string
	// 			timestamp: string
	// 			content: string
	// 			likes: number
	// 			comments: Comment[]
	// 		}

	// 		interface Comment {
	// 			id: string
	// 			author: string
	// 			timestamp: string
	// 			content: string
	// 			likes: number
	// 		}

	// 		type ResponseData = ElfPost[]`,
	// 	},
	// 	{
	// 		component: Day24,
	// 		title: `Santa's Magical Tracker`,
	// 		text: `After a hard month of solving challenges and repairing the sleigh, it's finally Christmas Eve. Svelte Bot needs your help to solve the final piece of the puzzle; the Sleigh Position Reporting System (SPRS™). This is crucial for everyone at the North Pole to keep an eye on Santa's epic journey around the world! Your mission is to create a magical map where Santa's real-time location is tracked as he flies from city to city, spreading joy and delivering gifts. Feel free to add a sprinkle of holiday cheer from an earlier challenge - perhaps you'd like to add some snowfall or give each location a unique snowflake?

	// 		Santa has supernatural speed and can visit every city in the world in a single night, starting on Christmas Eve at 10am UTC. Santa usually visits each city for just a few minutes, so make sure to update the map frequently! You can use the provided data to get the list of cities and their arrival times.

	// 		Svelte Bot has put together an example Mapbox REPL to help you get started. You can then fetch the data in real time here: https://advent.sveltesociety.dev/data/2023/day-twenty-four.json. Santa starts his flight at 10am UTC.

	// 		The TypeScript type for the data is:

	// 		interface Destination {
	// 				id: string;
	// 				arrival: number; // arrival unix timestamp (UTC)
	// 				departure: number | null; // only null for the final landing
	// 				population: number;
	// 				presentsDelivered: number;
	// 				city: string;
	// 				region: string;
	// 				location: {
	// 						lat: number;
	// 						lng: number;
	// 				};
	// 		}

	// 		interface ResponseData {
	// 				/**
	// 				 * Current Location
	// 				 */
	// 				current: Destination | null;

	// 				/**
	// 				 * Next Location
	// 				 */
	// 				next: Destination | null;

	// 				/**
	// 				 * History of locations (excluding current)
	// 				 */
	// 				destinations: Destination[];
	// 		}`,
	// 	},
] satisfies (Day | undefined)[]
