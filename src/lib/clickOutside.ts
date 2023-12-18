export function clickOutside(node: HTMLElement, handler?: (event: MouseEvent) => void) {
	function handleClick(event: MouseEvent) {
		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			if (handler == null) {
				node.dispatchEvent(new CustomEvent('click-outside', node as CustomEventInit))
			} else {
				handler(event)
			}
		}
	}

	document.addEventListener('click', handleClick, true)

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		},
	}
}
