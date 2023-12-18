interface BaseDecoration {
	x: number
	y: number
	size: number
}

interface TextDecoration extends BaseDecoration {
	type: 'text'
	text: string
	color: string
}

interface ImageDecoration extends BaseDecoration {
	type: 'image'
	id: number
}

export type Decoration = TextDecoration | ImageDecoration
