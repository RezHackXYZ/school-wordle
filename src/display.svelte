<script>
	import { CurrentWord, words } from "./logic.js";
</script>

<div id="root">
	{#each words as word}
		<div class="word">
			{#each word as letter}
				<span class={letter[1]}>{letter[0]}</span>
			{/each}
		</div>
	{/each}
	<div class="word">
			<span>{CurrentWord[0]}</span>
			<span>{CurrentWord[1]}</span>
			<span>{CurrentWord[2]}</span>
			<span>{CurrentWord[3]}</span>
			<span>{CurrentWord[4]}</span>
	</div>
</div>

<style>
	#root {
		height: calc(100% - 320px);
		border: 2px solid #202020;
		margin: 20px;
		border-radius: 10px;
		overflow-y: scroll;
	}

	.word {
		display: flex;
		gap: 5px;
		margin: 10px;
		justify-content: center;
	}

	span {
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
</style>
