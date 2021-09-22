const signUpBotton = document.getElementById('signUp');
const signInBotton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpBotton.addEventListener('click', () => {container.classList.add('right-panel-active')});
signInBotton.addEventListener('click', () => {container.classList.remove('right-panel-active')});