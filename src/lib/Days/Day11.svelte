<script lang="ts">
	import { onMount } from 'svelte'

	interface NamesList {
		firstNames: string[]
		lastNames: string[]
	}

	onMount(getNames)

	async function getNames() {
		const response = await fetch(`https://advent.sveltesociety.dev/data/2023/day-eleven.json`)
		elfNames = await response.json()
	}

	let elfNames = $state<NamesList>({ firstNames: [], lastNames: [] })
	let humanName = $state('')
	let elfName = $derived(generate(humanName))

	function generate(humanName: string) {
		const names = humanName.split(' ').filter((name) => name.length > 0)

		if (names.length < 1) return ``
		if (names.length === 1) return pickName(elfNames.firstNames, names[0])

		const last = pickName(elfNames.lastNames, names[names.length - 1])
		const first = names.slice(0, -1).map((name) => pickName(elfNames.firstNames, name))

		return `${first.join(' ')} ${last}`
	}

	function pickName(sourceList: string[], name: string) {
		const sum = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0)
		return sourceList[sum % sourceList.length]
	}
</script>

<h3>Tinsel Transformers</h3>

<div class="rounded-md border text-center">
	<h3>{elfName || '\u00a0'}</h3>

	<input
		bind:value={humanName}
		type="text"
		placeholder="Full Name"
		class="w-full rounded-t-none text-center"
	/>
</div>
