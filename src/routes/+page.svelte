<script lang="ts">
	import Days from '$lib/Days'
</script>

<h1 class="mb-4">Advent of Svelte</h1>

<div class="flex flex-col gap-2">
	{#each Days as _day, index}
		{#if index > 0}
			<a href="/day/{index}" class="p-2">Day {index}</a>
		{/if}
	{/each}
</div>
