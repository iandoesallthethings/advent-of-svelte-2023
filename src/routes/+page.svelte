<script lang="ts">
	import Days from '$lib/Days'
</script>

<svelte:head>
	<title>Advent of Svelte 2023</title>
</svelte:head>

<img src="favicon.png" alt="Advent of Svelte 2023" class="max-w-[150px] self-center sm:max-w-xs" />

<h1 class="mb-4 self-center">Advent of Svelte 2023</h1>

<p class="max-w-prose self-center">
	Here's my frantic attempt to catch up on advent of svelte 2023 (because I only learned about it on
	the 15th). I'm using this as an excuse to practice/showcase Svelte 5 and Bun, but since I'm so
	behind, expect the visuals to be ROUGH.
</p>

<div class="flex items-center justify-center">
	<a href="https://advent.sveltesociety.dev" class="button"> Advent of Svelte 2023 </a>

	<a href="https://github.com/iandoesallthethings/advent-of-svelte-2023" class="button">
		My Code
	</a>
</div>

<div class="page flex h-full flex-col gap-2 overflow-y-auto pb-8">
	{#each Days as day, index}
		{#if day}
			<a href="/day/{index}" class="button">Day {index} - {day.title}</a>
		{/if}
	{/each}
</div>
