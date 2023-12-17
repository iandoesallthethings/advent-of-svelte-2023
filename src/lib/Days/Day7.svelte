<script lang="ts">
	import { morseCode, type MorseLetter } from '$lib/morse'
	const helloWorld = `.... . .-.. .-.. --- / .-- --- .-. .-.. -..`

	let input = $state(helloWorld)
	let output = $state(`hello world`)

	function translate(morse: string) {
		const characters = morse.split(' ') as MorseLetter[]
		return characters.map((code) => morseCode[code]).join('')
	}
</script>

<div class="h-20 rounded bg-white/10 p-2">{output}</div>
<input on:input={() => (output = translate(input))} type="text" bind:value={input} />
