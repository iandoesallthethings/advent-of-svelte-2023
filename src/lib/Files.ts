export async function downloadImage(src: string, name: string) {
	const image = await fetch(src)
	const imageBlog = await image.blob()
	const imageURL = URL.createObjectURL(imageBlog)

	const link = document.createElement('a')
	link.href = imageURL
	link.download = name
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}
