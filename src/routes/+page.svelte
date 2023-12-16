<script lang="ts">
	import Days from '$lib/Days'
</script>

<h1>Advent of Svelte</h1>

<h2>Days</h2>
<div class="flex flex-col gap-2">
	{#each Days as _day, index}
		{#if index > 0}
			<a href="/day/{index}">Day {index}</a>
		{/if}
	{/each}
</div>
