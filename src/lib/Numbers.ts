export function sequence(start: number, end: number, step: number = 1) {
	return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step)
}

export function shuffle<T>(array: T[]) {
	let currentIndex = array.length,
		randomIndex

	// While there remain elements to shuffle.
	while (currentIndex > 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
	}

	return array
}
