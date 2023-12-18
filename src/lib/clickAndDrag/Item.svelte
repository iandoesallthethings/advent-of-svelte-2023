<script lang="ts">
	import type { Decoration } from '$types'

	interface Props {
		decoration: Decoration
		container: HTMLElement
	}

	let { decoration, container } = $props<Props>()

	let dragging = $state(false)

	function dragStart() {
		console.debug('dragStart')
		dragging = true
	}
	function dragEnd() {
		console.debug('dragEnd')
		dragging = false
	}

	function drag(event: DragEvent) {
		console.debug(dragging)
		if (dragging) {
			decoration.x += event.movementX / container.clientWidth
			decoration.y += event.movementY / container.clientHeight
			console.debug(decoration.x, decoration.y)
		}
	}
</script>

<div
	role="listitem"
	on:dragstart={dragStart}
	on:dragend={dragEnd}
	on:drag={drag}
	class="absolute font-bold"
	style="
			container-name: canvas;
			top: calc({decoration.y}cqh - {decoration.size}cqw / 2)
			left: {decoration.x}cqw; 
			width: {decoration.size}cqw;
			font-size: {decoration.size}cqw;
			color: {(decoration.type === 'text' && decoration.color) ?? 'black'};
		"
>
	{#if decoration.type === 'text'}
		{decoration.text}
	{:else if decoration.type === 'image'}
		<img src="/decorations/{decoration.id}.png" alt="Decoration {decoration.type}" class="w-full" />
	{/if}
</div>
