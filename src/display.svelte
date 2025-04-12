<script>
	// c = correct position
	// d = different position
	// w = wrong and not in word
	let words = [
		[
			["R", "c"],
			["A", "d"],
			["D", "w"],
			["I", "w"],
			["O", "w"],
		],
		[
			["T", "w"],
			["E", "w"],
			["S", "w"],
			["T", "w"],
			["S", "w"],
		],
		[
			["P", "w"],
			["L", "w"],
			["A", "d"],
			["N", "w"],
			["E", "w"],
		],
		[
			["C", "w"],
			["O", "w"],
			["D", "w"],
			["E", "w"],
			["S", "w"],
		],
		[
			["H", "w"],
			["E", "w"],
			["L", "w"],
			["L", "w"],
			["O", "w"],
		],
		[
			["G", "w"],
			["A", "d"],
			["M", "w"],
			["E", "w"],
			["S", "w"],
		],
		[
			["F", "w"],
			["A", "c"],
			["C", "w"],
			["T", "w"],
			["S", "w"],
		],
		[
			["R", "c"],
			["A", "c"],
			["D", "c"],
			["I", "c"],
			["O", "c"],
		],
	];
</script>

<div id="root">
	{#each words as word}
		<div class="word">
			{#each word as letter}
				<span class={letter[1]}>{letter[0]}</span>
			{/each}
		</div>
	{/each}
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
