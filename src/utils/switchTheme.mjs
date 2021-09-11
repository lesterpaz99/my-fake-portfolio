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

export default switchTheme;
