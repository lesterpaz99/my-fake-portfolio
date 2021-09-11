document.querySelector('.arrow-right').addEventListener('click', clickRight);
document.querySelector('.arrow-left').addEventListener('click', clickLeft);
document
	.querySelector('.send-button')
	.addEventListener('click', (e) => validateForm(e));
document.querySelectorAll('.project').forEach((element) => {
	element.addEventListener('click', (e) => openModal(e));
});
document.body.addEventListener('click', (e) => closeModal(e));
const modal = document.querySelector('.modal');
modal.addEventListener('keyup', (e) => {
	if (e.code === 'Escape') {
		closeModal(e);
	}
});

/** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
function clickRight() {
	const currentLeft = parseInt(
		getComputedStyle(document.querySelector('.project-container')).left,
		10
	);
	if (currentLeft < -270) {
		//si el valor de izquierda es menor a -270, para de mover el contenido
		return;
	}
	let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margines
	document.querySelector('.project-container').style.left = `${newValue}px`;
	valuesRight[`${newValue}`]();
}

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

/** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
function clickLeft() {
	const currentLeft = parseInt(
		getComputedStyle(document.querySelector('.project-container')).left,
		10
	);
	if (currentLeft === 0) {
		//si el valor de izquierda es 0, retornar para no seguir moviendo el contenido
		return;
	}
	let newValue = currentLeft + 270;
	document.querySelector('.project-container').style.left = `${newValue}px`;
	valuesLeft[`${newValue}`]();
}

/**Valida si el formulario esta correcto antes de mostrar la notificacion*/
const validateForm = (e) => {
	e.preventDefault();

	const nameField = document.getElementById('name');
	if (nameField.value === '') {
		const nameErr = document.getElementById('name-error');
		nameErr.classList.add('name-error-active');
		nameErr.innerText = 'Debes introducir un nombre';
		setTimeout(() => {
			nameErr.innerText = '';
			nameErr.classList.remove('name-error-active');
		}, 3000);
		return;
	}
	showNotification();
};

/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
	document.querySelector('.form-container').reset();
	document.querySelector(
		'.notification'
	).innerHTML = `<p>El formulario fue enviado sin errores</p>`;
	document.querySelector('.notification').style.display = 'flex';
	setTimeout(function () {
		document.querySelector('.notification').style.display = 'none';
	}, 3000);
}

/** Esta funcion se llama cuando la persona hace click en cualquier proyecto del carousel */
function openModal(e) {
	document.querySelector('.modal-container').style.display = 'flex';
	const modalImage = document.getElementById('modal-project-image');

	if (e.target.className !== 'project-img') {
		const targetElement = e.target.childNodes[1];
		modalImage.setAttribute('src', targetElement.getAttribute('src'));
		document.getElementById('modal-exit-btn').focus();
		return;
	}
	modalImage.setAttribute('src', e.target.getAttribute('src'));
	document.getElementById('modal-exit-btn').focus();
}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
	// si el click ocurrio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
	if (
		e.target.className.includes('project') ||
		e.target.className === 'modal' ||
		e.target.innerText === 'Ejemplo de un proyecto mio'
	) {
		return;
	}
	console.log(e);
	document.querySelector('.modal-container').style.display = 'none';
}

const target = document.querySelector('#header');

const options = {};
const arrowTopBtn = document.querySelector('.back-to-top');

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
observer.observe(target);

const toggleSwitch = document.querySelector(
	'.theme-switch input[type="checkbox"]'
);

/** Dark/light mode switch function */
function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'light');
		document.getElementById('theme-mode').innerText = 'Light';
		return;
	}
	document.documentElement.setAttribute('data-theme', 'dark');
	document.getElementById('theme-mode').innerText = 'Dark';
}

toggleSwitch.addEventListener('change', switchTheme, false);
