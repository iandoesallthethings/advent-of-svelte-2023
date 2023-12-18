<script lang="ts">
	import { sequence } from '$lib/Numbers'
	import Item from '$lib/clickAndDrag/Item.svelte'
	import type { Decoration } from '$types'

	let canvas: HTMLDivElement
	/** @param number Integer from 1-11, inclusive */
	function decorationSrc(number: number) {
		return `/decorations/${number}.png`
	}

	const example: Decoration[] = [
		{ type: 'text', text: 'Hello', x: 10, y: 10, size: 30, color: 'black' },
		{ type: 'image', id: 1, x: 20, y: 20, size: 50 },
	]

	let decorations = $state<Decoration[]>(example)
</script>

<div class="flex h-full w-full">
	<div
		class="flex max-h-full w-16 flex-col items-center divide-y overflow-y-auto overflow-x-hidden rounded-lg border"
	>
		<div class="flex h-16 items-center justify-center">Text</div>

		{#each sequence(1, 11) as number}
			<div class="tool flex items-center justify-center">
				<img src={decorationSrc(number)} alt="Decoration {number}" />
			</div>
		{/each}
	</div>

	<div class="canvas-container flex h-full max-h-full w-full items-center justify-center pl-4">
		<div
			bind:this={canvas}
			class="canvas @container/canvas container relative aspect-[4/6] max-h-full w-full rounded-xl bg-white text-black"
		>
			{#each decorations as decoration}
				<Item bind:decoration container={canvas} />
			{/each}
		</div>
	</div>
</div>
