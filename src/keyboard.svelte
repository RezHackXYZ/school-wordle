<script>
	import { keys, ButtonPressed } from "./logic.js";
</script>

<div id="root">
	<div class="word">
		{#each keys.slice(0, 10) as key}
			<button on:click={() => ButtonPressed(key[0])} class={key[1]}
				>{key[0]}</button
			>
		{/each}
	</div>

	<div class="word">
		{#each keys.slice(10, 19) as key}
		<button on:click={() => ButtonPressed(key[0])} class={key[1]}
			>{key[0]}</button
			>
		{/each}
	</div>
	<div class="word">
		{#each keys.slice(19) as key}
		<button on:click={() => ButtonPressed(key[0])} class={key[1]}
			>{key[0]}</button
			>
		{/each}
	</div>
</div>

<style>
	#root {
		height: 255px;
		margin: 20px;
		border-radius: 10px;
		border: 2px solid #202020;
	}

	.word {
		display: flex;
		gap: 5px;
		margin: 10px;
		justify-content: center;
	}

	button {
		background-color: #202020;
		font-family: "JetBrains Mono", monospace;
		color: #808080;
		width: 70px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		font-size: 50px;
		border: 2px solid #444;
	}

	.c {
		background-color: #2b5f2d;
	}
	.d {
		background-color: #804d00;
	}
	.w {
		background-color: #2b2b2b;
	}
	.o {
		background-color: #202829;
	}
</style>
