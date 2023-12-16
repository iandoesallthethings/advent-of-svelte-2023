<script lang="ts">
	type T = $$Generic

	interface Props {
		items: T[]
		targetList: T[]
		class?: string
	}
	let { items, class: classes } = $props<Props>()

	let dragging = $state(false)
</script>

<ul
	class="flex w-1/2 flex-col p-4 {classes}"
	class:ring={dragging}
	on:dragover|preventDefault
	on:dragenter={() => (dragging = true)}
	on:dragleave={() => (dragging = false)}
	on:drop={() => (dragging = false)}
	on:drop
>
	{#each items as item}
		<slot {item} />
	{/each}
</ul>
