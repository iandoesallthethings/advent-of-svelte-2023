<script lang="ts">
	import { sequence } from '$lib/Numbers'

	/** @param number Integer from 1-11, inclusive */
	function decorationSrc(number: number) {
		return `https://advent.sveltesociety.dev/data/2023/day-twelve/${number}.png`
	}

	interface BaseDecoration {
		x: number
		y: number
		scale: number
	}

	interface TextDecoration extends BaseDecoration {
		type: 'text'
		text: string
		color: string
	}

	interface ImageDecoration extends BaseDecoration {
		type: 'image'
		id: number
	}

	type Decoration = TextDecoration | ImageDecoration

	const example: Decoration[] = [
		{ type: 'text', text: 'Hello', x: 100, y: 100, scale: 1, color: 'black' },
		{ type: 'image', id: 1, x: 200, y: 200, scale: 2 },
	]

	let decorations = $state<Decoration[]>(example)
</script>

<div class="flex h-full w-full">
	<div
		class="flex h-full flex-col items-center justify-center divide-y overflow-y-auto rounded-lg border"
	>
		<div>Text</div>

		{#each sequence(1, 11) as number}
			<div class="tool flex w-16 items-center justify-center">
				<img src={decorationSrc(number)} alt="Decoration {number}" />
			</div>
		{/each}
	</div>

	<div class="canvas-container flex h-full max-h-full w-full items-center justify-center pl-4">
		<div class="canvas relative aspect-[4/6] max-h-full w-full rounded-xl bg-white text-black">
			{#each decorations as decoration}
				{#if decoration.type === 'text'}
					<div
						class="absolute text-[24px] font-bold text-[#000000]"
						style="
							left: {decoration.x}px; 
							top: {decoration.y}px;
							scale: {decoration.scale};
							color: {decoration.color};
						"
					>
						{decoration.text}
					</div>
				{:else}
					<img
						class="absolute"
						src={decorationSrc(decoration.id)}
						alt="Decoration {decoration.type}"
						style="
							left: {decoration.x}px; 
							top: {decoration.y}px; 
							scale: {decoration.scale};
						"
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>
