import { clickLeft, clickRight } from './utils/slider.mjs';
import validateForm from './utils/form.mjs';
import { openModal, closeModal } from './utils/modal.mjs';
import observer from './utils/showArrowTop.mjs';
import switchTheme from './utils/switchTheme.mjs';

const sliderRightBtn = document.querySelector('.arrow-right');
const sliderLeftBtn = document.querySelector('.arrow-left');
const sendBtn = document.querySelector('.send-button');
const modal = document.querySelector('.modal');

sliderRightBtn.addEventListener('click', clickRight);
sliderLeftBtn.addEventListener('click', clickLeft);

sendBtn.addEventListener('click', (e) => validateForm(e));

document.querySelectorAll('.project').forEach((element) => {
	element.addEventListener('click', (e) => openModal(e));
});

document.body.addEventListener('click', (e) => closeModal(e));

modal.addEventListener('keyup', (e) => {
	if (e.code === 'Escape') {
		closeModal(e);
	}
});

const target = document.querySelector('#header');
observer.observe(target);

const toggleSwitch = document.querySelector(
	'.theme-switch input[type="checkbox"]'
);
toggleSwitch.addEventListener('change', switchTheme, false);
