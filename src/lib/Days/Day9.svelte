<script lang="ts">
	import { onMount } from 'svelte'

	const timerStart = new Date('2023-12-01T00:00:00.000Z')
	const targetDate = new Date('2023-12-25T00:00:00.000Z')

	let timeLeft = $state(getTimeLeft())

	let bar = $derived((100 * timeLeft.getTime()) / (targetDate.getTime() - timerStart.getTime()))

	function run() {
		timeLeft = getTimeLeft()

		window.setTimeout(run, 1000)
	}

	function getTimeLeft() {
		return new Date(targetDate.getTime() - Date.now())
	}

	function timerSegments(date: Date) {
		const units = {
			day: Math.floor(date.getTime() / (1000 * 60 * 60 * 24)),
			hour: Math.floor((date.getTime() / (1000 * 60 * 60)) % 24),
			minute: Math.floor((date.getTime() / 1000 / 60) % 60),
			second: Math.floor((date.getTime() / 1000) % 60),
		}

		return Object.entries(units).map(([unit, value]) => {
			const s = value === 1 ? '' : 's'
			return value > 0 ? `${value} ${unit}${s}` : ''
		})
	}

	onMount(run)
</script>

<h3>Santa's Final Countdown</h3>

<h1 class="rounded-lg border p-8 text-center">
	{#each timerSegments(timeLeft) as segment}
		<div>{segment}</div>
	{/each}
</h1>

<div class="relative h-20 w-full overflow-hidden rounded-lg border">
	<h3 class="absolute flex h-full w-full items-center justify-center">
		{Math.floor(bar)}%
	</h3>

	<div class="h-full bg-green-500" style="width: {bar}%;" />
</div>
