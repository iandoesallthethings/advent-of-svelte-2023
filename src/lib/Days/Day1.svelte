<script lang="ts">
	import { onMount } from 'svelte'

	interface Child {
		name: string
		tally: number
	}

	const filters: Record<string, (child: Child) => boolean> = {
		all: () => true,
		nice: ({ tally }) => tally > 0,
		naughty: ({ tally }) => tally <= 0,
	}

	const sorts: Record<string, (a: Child, b: Child) => number> = {
		name: (a, b) => a.name.localeCompare(b.name) * direction,
		tally: (a, b) => (b.tally - a.tally) * direction,
	}

	let name = $state('ian')
	let tally = $state(9001)
	let filter = $state('all')
	let sort = $state('name')
	let direction = $state(1)

	let children = $state<Child[]>([])
	let sortedChildren = $derived(children.filter(filters[filter]).sort(sorts[sort]))

	function submit() {
		children.unshift({ name, tally })
	}

	function remove(index: number) {
		children.splice(index, 1)
	}

	async function fetchChildren() {
		const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json')
		const data = await res.json()
		children.push(...data)
	}

	onMount(fetchChildren)
</script>

<form on:submit={submit} class="flex w-full justify-center gap-2 py-4">
	<input type="text" name="name" bind:value={name} />
	<input type="number" name="tally" bind:value={tally} class="w-16" />
	<button>Submit</button>
</form>

<div class="flex items-center justify-center gap-2">
	Filter
	<select bind:value={filter}>
		<option value="all">all</option>
		<option value="nice">nice 😇</option>
		<option value="naughty">naughty 😈</option>
	</select>

	Sort
	<select bind:value={sort}>
		<option value="name">name</option>
		<option value="tally">tally</option>
	</select>

	Direction
	<select bind:value={direction}>
		<option value={1}>asc</option>
		<option value={-1}>desc</option>
	</select>
</div>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Tally</th>
			<th class="">Status</th>
			<!-- <th></th> -->
		</tr>
	</thead>

	<tbody>
		{#each sortedChildren as { name, tally }, index}
			<tr class="odd:bg-white/10">
				<td>{name}</td>

				<td class="text-right">{tally}</td>

				<td>{tally > 0 ? '😇' : '😈'}</td>

				<td>
					<button on:click={() => remove(index)}>🗑️</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
