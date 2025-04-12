<script>
	// c = correct position
	// d = different position
	// w = wrong and not in word

	/*
    
    Q W E R T Y U I O P [ ] \
A S D F G H J K L ; '
Z X C V B N M , . /

*/
	let words = [
		[
			["Q", "n"],
			["W", "n"],
			["E", "n"],
			["R", "n"],
			["T", "n"],
			["Y", "n"],
			["U", "n"],
			["I", "n"],
			["O", "n"],
			["P", "n"],
		],
		[
			["A", "n"],
			["S", "n"],
			["D", "n"],
			["F", "n"],
			["G", "n"],
			["H", "n"],
			["J", "n"],
			["K", "n"],
			["L", "n"],
		],
		[
			["⇦", "o"],
			["Z", "n"],
			["X", "n"],
			["C", "n"],
			["V", "n"],
			["B", "n"],
			["N", "n"],
			["M", "n"],
			["↵", "o"],
		],
	];
</script>

<div id="root">
	{#each words as word}
		<div class="word">
			{#each word as letter}
				<button class={letter[1]}>{letter[0]}</button>
			{/each}
		</div>
	{/each}
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
