<script lang="ts">
	import { onMount } from 'svelte'
	import { sequence, shuffle } from '$lib/Numbers'

	const pairs = 24 // up to 24 pairs, 48 cards

	let cards = $state<number[]>([])
	let selection = $state<number[]>([])
	let matched = $state<number[]>([])
	let tries = $state(0)
	let time = $state(0)
	let running = $state(true)

	interface GameRecord {
		date: Date
		time: number
		tries: number
	}

	let records = $state<GameRecord[]>([])

	function reset() {
		time = 0
		tries = 0
		selection = []
		matched = []
		cards = shuffle([...sequence(1, pairs), ...sequence(1, pairs)])
		tick()
	}

	function tick() {
		if (!running) return
		time++
		window.setTimeout(tick, 1000)
	}

	function cardSrc(number: number) {
		// return `https://advent.sveltesociety.dev/data/2023/day-eight/${number}.png`
		return `/cards/${number}.png`
	}

	function select(index: number) {
		if (selection.length === 2) return

		selection.push(index)

		if (selection.length === 2) {
			tries++
			const [a, b] = selection

			if (cards[a] === cards[b]) setMatched(a, b)
			else clearSelection()
		}
	}

	function setMatched(a: number, b: number) {
		window.setTimeout(() => {
			matched.push(a, b)
			clearSelection()
			checkForWin()
		}, 375)
	}

	function checkForWin() {
		if (matched.length === cards.length) {
			records.push({ date: new Date(), time, tries })
			alert('You win!')
			running = false
		}
	}

	function clearSelection() {
		window.setTimeout(() => (selection = []), 750)
	}

	function deselect(index: number) {
		selection = selection.filter((i) => i !== index)
	}

	const formatter = new Intl.DateTimeFormat('es-US', {
		minute: 'numeric',
		second: 'numeric',
	})

	onMount(reset)
</script>

<h3>Santa's Mysterious Deck of Doubles</h3>

<div class="flex items-center gap-2 py-2">
	<div>Time: {formatter.format(new Date(time * 1000))}</div>
	<div>Tries: {tries}</div>
	<div>Matches: {matched.length / 2}</div>

	<button on:click={reset}>RESET</button>
</div>

<div class="game grid grid-cols-8 py-2">
	{#each cards as card, index}
		{#if matched.includes(index)}
			<img src={cardSrc(card)} alt="{card} card" class="opacity-10" />
		{:else if selection.includes(index)}
			<button on:click={() => deselect(index)} class="card">
				<img src={cardSrc(card)} alt="{card} card" />
			</button>
		{:else}
			<button on:click={() => select(index)} class="card">
				<img src="/cards/blank.png" alt="Back card" />
			</button>
		{/if}
	{/each}
</div>

{#if records.length > 0}
	<h3 class="mt-8 text-center">Records</h3>
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Time</th>
				<th>Tries</th>
			</tr>
		</thead>
		<tbody>
			{#each records as record}
				<tr>
					<td>{record.date.toLocaleDateString()}</td>
					<td>{formatter.format(new Date(record.time * 1000))}</td>
					<td>{record.tries}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<style lang="postcss">
	button.card {
		all: unset;
	}
</style>
