<script lang="ts">
	let cookies = $state(0)

	let increment = $state(1)
</script>

<h3>Merry Munch-o-Meter</h3>

<p>Kinda half-assing this one since I'm 15 days behind.</p>

<div class="flex items-center justify-center gap-2 py-4">
	<input type="number" bind:value={increment} />
	<button on:click={() => (cookies -= increment)}>-</button>
	<button on:click={() => (cookies += increment)}>+</button>
	<button on:click={() => (cookies = 0)}>reset</button>
</div>

<h1 class="text-center">Cookies: {cookies}</h1>
