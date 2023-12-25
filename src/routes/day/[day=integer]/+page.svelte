<script lang="ts">
	import { page } from '$app/stores'
	import Days from '$lib/Days'

	const day = $derived(parseInt($page.params.day))
	const title = $derived(Days[day]?.title)
	const component = $derived(Days[day]?.component)
</script>

<svelte:head>
	<title>Day {day} - Advent of Svelte 2023</title>
</svelte:head>

<h3 class="pb-4 text-center">{title}</h3>

<svelte:component this={component} />
