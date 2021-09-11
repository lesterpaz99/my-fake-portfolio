const arrowTopBtn = document.querySelector('.back-to-top');
const options = {};

const showArrowTop = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			arrowTopBtn.style.transform = 'scale(0)';
			return;
		}
		arrowTopBtn.style.transform = 'scale(1)';
	});
};

let observer = new IntersectionObserver(showArrowTop, options);

export default observer;
