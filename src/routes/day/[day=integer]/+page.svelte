<script lang="ts">
	import { page } from '$app/stores'
	import Days from '$lib/Days'

	const day = $derived(parseInt($page.params.day))
</script>

<svelte:head>
	<title>Day {day} - Advent of Svelte 2023</title>
</svelte:head>

{#if Days[day]}
	<h3>{Days[day].title}</h3>

	<svelte:component this={Days[day].component} />
{/if}
