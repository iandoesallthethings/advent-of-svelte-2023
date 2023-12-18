<script lang="ts">
	import { page } from '$app/stores'
	import Days from '$lib/Days'

	const current = $derived(parseInt($page.params.day))
	const previous = $derived(current - 1)
	const next = $derived(current + 1)
</script>

<nav class="z-50 flex w-full items-center justify-between p-2">
	{#if previous > 0}
		<a href="/day/{previous}" class="button">👈 prev</a>
	{:else}
		<a href="/" class="button">🏠 Home</a>
	{/if}

	<h3 class="group">
		<span class="p-2 group-hover:hidden">
			Day {$page.params.day}
		</span>

		<a href="/" class="button hidden group-hover:block"> Go home</a>
	</h3>

	{#if next <= Days.length - 1}
		<a href="/day/{next}" class="button">next 👉</a>
	{:else}
		<a href="/" class="button">🏠 Home</a>
	{/if}
</nav>

<div class="page flex w-full grow flex-col overflow-y-auto">
	<slot />
</div>
