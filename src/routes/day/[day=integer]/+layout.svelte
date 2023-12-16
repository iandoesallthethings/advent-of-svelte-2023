<script lang="ts">
	import { page } from '$app/stores'
	import Days from '$lib/Days'

	const current = $derived(parseInt($page.params.day))
	const previous = $derived(current - 1)
	const next = $derived(current + 1)
</script>

<nav class="flex w-full items-center justify-between p-2">
	{#if previous > 0}
		<a href="/day/{previous}">👈 prev</a>
	{:else}
		<span class="opacity-30">👈 prev</span>
	{/if}

	<h3 class="group">
		<span class="group-hover:hidden">
			Day {$page.params.day}
		</span>

		<a href="/" class="hidden group-hover:block"> Go home</a>
	</h3>

	{#if next <= Days.length - 1}
		<a href="/day/{next}">next 👉</a>
	{:else}
		<span class="opacity-30">next 👉</span>
	{/if}
</nav>

<slot />
