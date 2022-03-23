import { onNavigate } from '../main.js';
export const home = () => {
  const sectionStart = document.createElement('section');
  sectionStart.setAttribute('class', 'containerStart');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', 'img/logoSize.png');
  imgLogo.setAttribute('class', 'logo');

  const sectionWelcome = document.createElement('section');
  sectionWelcome.setAttribute('class', 'welcomeText');

  const paragraphWelcome = document.createElement('paragraph');
  paragraphWelcome.textContent = 'Bienvenida';
  const brTag = document.createElement('br');
  const paragraphMessage = document.createElement('paragraph');
  paragraphMessage.textContent = 'Conecta con tu mundo tech';
  sectionWelcome.appendChild(paragraphWelcome);
  sectionWelcome.appendChild(brTag);
  sectionWelcome.appendChild(paragraphMessage);

  const sectionButtons = document.createElement('section');
  sectionButtons.setAttribute('class', 'containerButtons');
  const aButtonRegister = document.createElement('a');
  aButtonRegister.textContent = 'Registrarte';
  aButtonRegister.setAttribute('class', 'button');
  aButtonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  const aButtonLogin = document.createElement('a');
  aButtonLogin.textContent = 'Iniciar sesión';
  aButtonLogin.setAttribute('class', 'button');
  aButtonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  sectionStart.appendChild(imgLogo);
  sectionStart.appendChild(sectionWelcome);
  sectionStart.appendChild(sectionButtons);
  sectionButtons.appendChild(aButtonRegister);
  sectionButtons.appendChild(aButtonLogin);

  return sectionStart;
};
//`
// <div class="containerStart">
// <img class="logo" src="img/logoSize.png">
// <section class="welcomeText">
// <p> ¡Bienvenida! <p>
// <p>Conecta con tu mundo tech. <p>
// </section>
// <div class="containerButtons">
// <a onclick="onNavigate('/register'); return
// false;" class="button">Registrate</a>
// <a onclick="onNavigate('/login'); return
// false;" class="button">Iniciar sesión</a>
// </div>
// </div>
// `;