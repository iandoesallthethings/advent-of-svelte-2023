<script lang="ts">
	import { onMount } from 'svelte'

	type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT'

	interface Task {
		elf: string
		task: TaskType
		minutesTaken: number
		date: string
	}

	let running = $state(true)
	let data = $state<Task[]>([])

	onMount(run)

	async function run() {
		if (running) data = await fetchData()

		setTimeout(run, 1000)
	}

	async function fetchData() {
		const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-five.json')
		return await res.json()
	}

	const relativeTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

	function formatDate(dateString: string) {
		const days = 1000 * 60 * 60 * 24
		const daysSince = Math.round((new Date(dateString).getTime() - new Date().getTime()) / days)
		return relativeTime.format(daysSince, 'days')
	}
</script>

<h3>Present Progress</h3>

<p>Data's a bit stale on this one, and it doesn't seem to be updating anymore. Gonna skip it.</p>
<button on:click={() => (running = !running)}>
	{running ? 'Stop' : 'Start'}
</button>

<table>
	<thead>
		<tr>
			<th>Elf</th>
			<th>Task</th>
			<th>Time (min)</th>
			<th>Date</th>
		</tr>
	</thead>

	<tbody>
		{#each data as { elf, task, minutesTaken, date }}
			<tr>
				<td>{elf}</td>
				<td>{task}</td>
				<td>{minutesTaken}</td>
				<td>{new Date(date).toLocaleDateString()} (~{formatDate(date)})</td>
			</tr>
		{/each}
	</tbody>
</table>
