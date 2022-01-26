import './style.css'

const password = document.querySelector('input[name="password"]');
const eye = document.querySelector('svg[data-icon="eye"]');
const eyeOff = document.querySelector('svg[data-icon="eye-off"]');

eye.addEventListener('click',()=>password.setAttribute('type', 'password'));

eyeOff.addEventListener('click',()=>password.setAttribute('type', 'text'));
