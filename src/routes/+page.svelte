<script lang="ts">
	import Days from '$lib/Days'
</script>

<h1 class="mb-4">Advent of Svelte</h1>

<p>
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

<div class="flex flex-col gap-2">
	{#each Days as _day, index}
		{#if index > 0}
			<a href="/day/{index}" class="button">Day {index}</a>
		{/if}
	{/each}
</div>
