<script lang="ts">
	import { clickOutside } from '$lib/clickOutside'
	import { onMount } from 'svelte'

	let modal: HTMLDialogElement
	let video: HTMLVideoElement

	function popUp() {
		window.setTimeout(open, 1000)
	}

	function open() {
		modal.showModal()
		video.play()
	}

	function close() {
		video.pause()
		modal.close()
	}

	onMount(popUp)
</script>

<h3>Pop-up! Spreading the Holiday Cheer</h3>

<div class="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
	<button on:click={open}>LETS GO</button>
</div>

<dialog bind:this={modal} class="w-full rounded-lg bg-slate-700 text-center text-slate-200">
	<div use:clickOutside={close} class="h-full w-full">
		<button on:click={close} class="absolute right-1 top-1 rounded-full px-2"> ❌ </button>

		<h1>MAURY CHRIMBUS</h1>

		<video bind:this={video} src="/chrimbus.webm" class="w-full">
			<track kind="captions" />
		</video>
	</div>
</dialog>
