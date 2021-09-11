const valuesRight = {
	'-270': function () {
		document.querySelector('.project1').setAttribute('tabindex', '-1');
		document
			.querySelector('.project1-container')
			.setAttribute('aria-hidden', true);

		document.querySelector('.project4').removeAttribute('tabindex');
		document
			.querySelector('.project4-container')
			.removeAttribute('aria-hidden');
	},
	'-540': function () {
		document.querySelector('.project2').setAttribute('tabindex', '-1');
		document
			.querySelector('.project2-container')
			.setAttribute('aria-hidden', true);

		document.querySelector('.project5').removeAttribute('tabindex');
		document
			.querySelector('.project5-container')
			.removeAttribute('aria-hidden');
	},
};

const valuesLeft = {
	'-270': function () {
		document.querySelector('.project5').setAttribute('tabindex', '-1');
		document
			.querySelector('.project5-container')
			.setAttribute('aria-hidden', true);

		document.querySelector('.project2').removeAttribute('tabindex');
		document
			.querySelector('.project2-container')
			.removeAttribute('aria-hidden');
	},
	0: function () {
		document.querySelector('.project4').setAttribute('tabindex', '-1');
		document
			.querySelector('.project4-container')
			.setAttribute('aria-hidden', true);

		document.querySelector('.project1').removeAttribute('tabindex');
		document
			.querySelector('.project1-container')
			.removeAttribute('aria-hidden');
	},
};

/** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
const clickRight = () => {
	const currentLeft = parseInt(
		getComputedStyle(document.querySelector('.project-container')).left,
		10
	);
	if (currentLeft < -270) {
		//si el valor de izquierda es menor a -270, para de mover el contenido
		return;
	}
	//270 toma en cuenta el tamaño de la imagen mas sus margines
	const newValue = currentLeft - 270;
	document.querySelector('.project-container').style.left = `${newValue}px`;
	valuesRight[`${newValue}`]();
};

/** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
const clickLeft = () => {
	const currentLeft = parseInt(
		getComputedStyle(document.querySelector('.project-container')).left,
		10
	);
	if (currentLeft === 0) {
		//si el valor de izquierda es 0, retornar para no seguir moviendo el contenido
		return;
	}
	const newValue = currentLeft + 270;
	document.querySelector('.project-container').style.left = `${newValue}px`;
	valuesLeft[`${newValue}`]();
};

/** Exporta la logica para los botones del slider */
export { clickLeft, clickRight };
