<script lang="ts">
	import LineChart from '$lib/LineChart.svelte'
	import { onMount } from 'svelte'

	interface DataPoint {
		heartRate: number
		time: Date
	}

	let running = $state(true)
	let heartRate = $state(0)
	let history = $state<DataPoint[]>([])

	let oldestData = $derived(msSince(history[history.length - 1]?.time ?? new Date()))
	onMount(run)

	async function run() {
		if (running) heartRate = await fetchData()

		setTimeout(run, 1000)
	}

	async function fetchData() {
		const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json')
		const { heartRate } = await res.json()

		history.unshift({ heartRate, time: new Date() })

		return heartRate
	}

	function interval(numberOfMinutes: number) {
		const now = new Date()

		const start = new Date(now.getTime() - numberOfMinutes * 60 * 1000)
		const dataPoints = history.filter(({ time }) => time > start)

		return average(dataPoints)
	}

	function average(dataPoints: DataPoint[]) {
		const sum = dataPoints.reduce((acc, { heartRate }) => acc + heartRate, 0)
		return sum / dataPoints.length
	}

	function msSince(date: Date) {
		return new Date().getTime() - date.getTime()
	}

	let round = Intl.NumberFormat('en', {
		maximumSignificantDigits: 5,
	})
</script>

<h3>Heart of Christmas</h3>

<button class="w-min self-end" on:click={() => (running = !running)}>
	{running ? 'Stop' : 'Start'}
</button>

<div>
	<h2>Current: {heartRate}</h2>
	<h4>Average: {round.format(average(history))}</h4>

	<div class:hidden={oldestData < 10 * 1000}>
		10s: {round.format(interval(1 / 60))}
	</div>
	<div class:hidden={oldestData < 60 * 1000}>
		1m: {round.format(interval(1))}
	</div>
	<div class:hidden={oldestData < 10 * 60 * 1000}>
		10m: {round.format(interval(10))}
	</div>
	<div class:hidden={oldestData < 60 * 60 * 1000}>
		1h: {round.format(interval(60))}
	</div>
	<div class:hidden={oldestData < 24 * 60 * 60 * 1000}>
		1d: {round.format(interval(60 * 24))}
	</div>
</div>

<LineChart
	plots={{
		green: history.map(({ time }) => [msSince(time) / 1000, average(history)]),
		red: history.map(({ heartRate, time }) => [msSince(time) / 1000, heartRate]),
	}}
/>

<div class="h-64 overflow-y-auto">
	{#each history as { heartRate, time }, _index}
		<div class="flex justify-between gap-2 px-2 odd:bg-white/10">
			<div>{heartRate}</div>
			<div>{time.toLocaleTimeString()}</div>
		</div>
	{/each}
</div>
