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

interface Day {
	title: string
	component: typeof Day1
}

export default [
	undefined,
	{ title: 'Naughty or Nice', component: Day1 },
	{ title: 'Merry Munch-o-Meter', component: Day2 },
	{ title: 'Jingle Bell Balancer', component: Day3 },
	{ title: 'Heart of Christmas', component: Day4 },
	{ title: 'Present Progress', component: Day5 },
	{ title: 'Misteltoe Metronome', component: Day6 },
	{ title: 'Morse Mischeif', component: Day7 },
	{ title: "Santa's Mysterious Deck of Doubles", component: Day8 },
	{ title: "Santa's Final Countdown", component: Day9 },
	{ title: 'Pop-up! Spreading the holiday cheer', component: Day10 },
	{ title: 'Tinsel Transformers', component: Day11 },
	{ title: 'Greetings and Salutations', component: Day12 },
] satisfies (Day | undefined)[]
