/** Esta funcion se llama cuando la persona hace click en cualquier proyecto del carousel */
const openModal = (e) => {
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
};

/** Esta funcion se llama para cerrar el modal */
const closeModal = (e) => {
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
};

export { openModal, closeModal };
