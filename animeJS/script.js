
const button = document.querySelector('.button');

const mouseHoverAnimation = () => {
	anime({
		targets: button,
		width: '40%',
		duration: 1000,
	})
}

button.addEventListener('mouseover', mouseHoverAnimation)
