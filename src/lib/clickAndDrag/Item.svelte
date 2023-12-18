<script lang="ts">
	import type { Decoration } from '$types'

	interface Props {
		decoration: Decoration
	}

	let { decoration } = $props<Props>()
</script>

<div
	on:mousedown
	class="target absolute font-bold"
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
