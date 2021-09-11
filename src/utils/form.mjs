/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
const showNotification = () => {
	document.querySelector('.form-container').reset();
	document.querySelector(
		'.notification'
	).innerHTML = `<p>El formulario fue enviado sin errores</p>`;
	document.querySelector('.notification').style.display = 'flex';
	setTimeout(function () {
		document.querySelector('.notification').style.display = 'none';
	}, 3000);
};

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

export default validateForm;
