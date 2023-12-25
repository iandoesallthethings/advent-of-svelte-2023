<script lang="ts">
	import { clickOutside } from '$lib/clickOutside'
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	interface Props {
		class?: string
	}

	let { class: className } = $props<Props>()

	let modal: HTMLDialogElement

	export function open() {
		modal.showModal()
		dispatch('open')
	}

	export function close() {
		modal.close()
		dispatch('close')
	}
</script>

<dialog bind:this={modal} class="w-full rounded-lg bg-slate-700 text-center text-slate-200">
	<div use:clickOutside={close} class="h-full w-full {className}">
		<button on:click={close} class="absolute right-1 top-1 rounded-full px-2 opacity-30">
			❌
		</button>

		<slot />
	</div>
</dialog>
