<script lang="ts">
	interface Props {
		plots: Record<string, number[][]>
		xRange?: [number, number]
		yRange?: [number, number]
		class?: string
	}

	const { plots, xRange = [0, 60], yRange = [80, 100], class: className } = $props<Props>()

	const viewBox = `${xRange[0]} ${yRange[0]} ${xRange[1] - xRange[0]} ${yRange[1] - yRange[0]}`

	function getPoints(points: number[][]) {
		return points.map(([x, y]) => `${x},${y}`).join(' ')
	}
</script>

<svg {viewBox} class="-scale-y-100 {className}">
	{#each Object.entries(plots) as [color, points]}
		<polyline
			style="
					stroke: {color}; 
					stroke-linecap: round; 
					stroke-width: 0.5;
				"
			points={getPoints(points)}
		/>
	{/each}
</svg>
