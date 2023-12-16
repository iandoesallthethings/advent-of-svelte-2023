<script lang="ts">
	import { page } from '$app/stores'
	import Days from '$lib/Days'

	const day = $derived(parseInt($page.params.day))
</script>

<svelte:component this={Days[day]} />
