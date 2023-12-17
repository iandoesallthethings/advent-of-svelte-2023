<script lang="ts">
	interface Props {
		plots: Record<string, number[][]>
		xRange?: [number, number]
		yRange?: [number, number]
		class?: string
	}

	const yBuffer = 5
	const { plots, class: className } = $props<Props>()

	let xRange = [0, 60] // 1 min window
	let yRange = $derived(getYRange(Object.values(plots).flat()))

	// viewbox="x y w h"
	const viewBox = $derived(`
		${xRange[0]} 
		${yRange[0]} 
		${xRange[1] - xRange[0]} 
		${yRange[1] - yRange[0]}
	`)

	function getPoints(points: number[][]) {
		return points.map(([x, y]) => `${x},${y}`).join(' ')
	}

	function getYRange(points: number[][]) {
		const allYs = points.map(([_x, y]) => y)
		return [Math.min(...allYs) - yBuffer, Math.max(...allYs) + yBuffer]
	}
	function sequence(start: number, end: number, step: number = 1) {
		return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step)
	}
</script>

<svg {viewBox} class="-scale-y-100 {className}">
	<g class="y">
		{#each sequence(60, 160, 5) as y}
			<line x1="0" x2="60" y1={y} y2={y} class="line" />
			<text x="4" y={-y}>{y}</text>
		{/each}
	</g>

	<g class="plots">
		{#each Object.entries(plots) as [color, points]}
			<polyline class="plot" style="stroke: {color};" points={getPoints(points)} />
		{/each}
	</g>
</svg>

<style lang="postcss">
	.y line {
		stroke: white;
		stroke-linecap: round;
		stroke-width: 0.2;
		opacity: 0.5;
	}

	.plot {
		stroke-linecap: round;
		stroke-width: 0.5;
	}

	.y text {
		fill: white;
		font-size: 10%;
		text-anchor: end;
		dominant-baseline: middle;
		opacity: 0.5;
		transform: scaleY(-1);
	}
</style>
