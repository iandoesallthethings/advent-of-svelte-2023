<script lang="ts">
	import { page } from '$app/stores'
	import Days from '$lib/Days'
	import Modal from '$lib/Modal.svelte'

	let modal: Modal

	const day = $derived(parseInt($page.params.day))
	const title = $derived(Days[day]?.title)
	const text = $derived(Days[day]?.text)
	const component = $derived(Days[day]?.component)
</script>

<svelte:head>
	<title>Day {day} - Advent of Svelte 2023</title>
</svelte:head>

<h3 class="flex w-full items-center justify-center gap-2 pb-4 text-center">
	{title}
	<button on:click={() => modal.open()} class="rounded-full px-3 text-sm"> Prompt </button>
</h3>

<Modal bind:this={modal} class="p-2">
	<h3>{title}</h3>

	<p class=" whitespace-pre-line text-left">{text}</p>
</Modal>

<svelte:component this={component} />
