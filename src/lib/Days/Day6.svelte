<script lang="ts">
	const precision = 5

	let tempo = $state(0)
	let taps = $state<number[]>([])

	function addTap() {
		taps.push(Date.now())
		calcBPM()
	}

	function reset() {
		taps = []
		tempo = 0
	}

	function calcBPM() {
		let ticks = []

		if (taps.length >= 2) {
			for (const [i, tap] of taps.entries()) {
				if (i < 1) continue
				// calc bpm between last two taps
				const thisTap = tap / 1000
				const lastTap = taps[i - 1] / 1000
				ticks.push(Math.round((60 / (thisTap - lastTap)) * 100) / 100)
			}
		}

		if (taps.length >= 24) taps.shift()

		tempo = ticks.length >= 2 ? getAverage(ticks) : 0
	}

	function getAverage(ticks: number[]) {
		let n = 0

		for (let i = ticks.length - 1; i >= 0; i--) {
			n += ticks[i]
			if (ticks.length - i >= precision) break
		}

		return n / precision
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === ' ') addTap()
	}

	let round = Intl.NumberFormat('en', {
		maximumSignificantDigits: 4,
	})
</script>

<h3>Misteltoe Metronome</h3>

<svelte:body on:keydown={handleKeydown} />
<h1 class="py-8 text-center">{round.format(tempo)} BPM</h1>

<div class="flex gap-2">
	<button class="grow" on:click={addTap}>TAP</button>
	<button on:click={reset}>RESET</button>
</div>
