<script lang="ts">
	import DroppableList from '$lib/DroppableList.svelte'
	import DroppableListItem from '$lib/DroppableListItem.svelte'
	import { onMount } from 'svelte'

	interface Gift {
		name: string
		weight: number
	}

	let gifts = $state<Gift[]>([])
	let load = $state<Gift[]>([])
	let weight = $derived(load.reduce((acc, { weight }) => acc + weight, 0))

	async function getGifts() {
		const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json')
		const data = await res.json()
		gifts.push(...data)
	}

	onMount(getGifts)

	let draggingLoad = $state<Gift>()
	let draggingGifts = $state<Gift>()

	function dropGifts() {
		if (draggingLoad) {
			load = load.filter((gift) => gift !== draggingLoad)
			gifts.push(draggingLoad)
		}
	}

	function dropLoad(event: DragEvent) {
		if (draggingGifts) {
			gifts = gifts.filter((gift) => gift !== draggingGifts)
			load.push(draggingGifts)
		}
	}

	function blockDragover(event: DragEvent) {
		event.preventDefault()
	}

	function send() {
		if (weight > 100) {
			alert('Overloaded!')
			return
		}

		load = []
	}
</script>

<h3 class="text-center">
	Current Load: {weight}kg
	{#if weight > 100}
		<span class="text-red-500">Overloaded!</span>
	{/if}
	<button on:click={send}>SEND</button>
</h3>

<div class="flex divide-x">
	<DroppableList
		bind:items={gifts}
		bind:targetList={load}
		let:item={gift}
		on:drop={dropGifts}
		on:dragover={blockDragover}
		class="gap-1"
	>
		<DroppableListItem item={gift} id={gift.name} on:drag={() => (draggingGifts = gift)}>
			<div>{gift.name}</div>
			<div>{gift.weight}</div>
		</DroppableListItem>
	</DroppableList>

	<DroppableList
		bind:items={load}
		bind:targetList={gifts}
		let:item={gift}
		on:drop={dropLoad}
		on:dragover={blockDragover}
		class="gap-1"
	>
		<DroppableListItem item={gift} id={gift.name} on:drag={() => (draggingLoad = gift)}>
			<div>{gift.name}</div>
			<div>{gift.weight}</div>
		</DroppableListItem>
	</DroppableList>
</div>
