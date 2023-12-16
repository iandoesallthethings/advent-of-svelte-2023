<script lang="ts">
	type T = $$Generic
	interface Props {
		item: T
		id?: string
		class?: string
	}

	let { item: item, id, class: classes } = $props<Props>()
</script>

<li
	{id}
	on:drag
	draggable="true"
	class="flex items-center justify-between rounded-md border p-2 {classes}"
>
	<slot />
</li>
