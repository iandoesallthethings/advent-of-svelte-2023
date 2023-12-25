<script lang="ts">
	import { onMount } from 'svelte'
	import Modal from '$lib/Modal.svelte'

	let modal: Modal
	let video: HTMLVideoElement

	function popUp() {
		window.setTimeout(modal.open, 1000)
	}

	onMount(popUp)
</script>

<div class="absolute left-0 top-0 z-[-1] flex h-screen w-full items-center justify-center">
	<button on:click={modal.open}>LETS GO</button>
</div>

<Modal bind:this={modal} on:open={() => video.play()} on:close={() => video.pause()}>
	<h1>MAURY CHRIMBUS</h1>

	<video bind:this={video} src="/chrimbus.webm" class="w-full">
		<track kind="captions" />
	</video>
</Modal>
