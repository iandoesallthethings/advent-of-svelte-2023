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
</script>

<button on:click={() => (running = !running)}>
	{running ? 'Stop' : 'Start'}
</button>

<div class="divide-y rounded border">
	<h3>
		Current: {heartRate}
	</h3>

	<div>Past 10 seconds: {interval(1 / 60)}</div>
	<div>Past 1 min: {interval(1)}</div>
	<div>Past 10 min: {interval(10)}</div>
	<div>Past Hour: {interval(60)}</div>
	<div>Past Day: {interval(60 * 24)}</div>
	<div>All Time: {average(history)}</div>
</div>

<LineChart
	plots={{
		green: history.map(({ time }) => [msSince(time) / 1000, average(history)]),
		red: history.map(({ heartRate, time }) => [msSince(time) / 1000, heartRate]),
	}}
/>

<div class="h-64 overflow-y-auto rounded border">
	{#each history as { heartRate, time }, _index}
		<div>{heartRate} @ {time.toLocaleTimeString()}</div>
	{/each}
</div>
