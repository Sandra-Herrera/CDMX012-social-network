// eslint-disable-next-line import/no-cycle
import { signIn, loginGoogle } from '../lib/firebase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const login = () => {
  const containerLoginAll = document.createElement('section');

  const arrowBack = document.createElement('img');
  arrowBack.setAttribute('src', 'img/Arrow.png');
  arrowBack.setAttribute('class', 'arrowBack');

  const containerLogin = document.createElement('div');
  containerLogin.setAttribute('class', 'containerLogin');

  const containerInputLogin = document.createElement('div');
  containerInputLogin.setAttribute('class', 'containerInputR');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.setAttribute('src', 'img/logoSize.png');

  const loginEmail = document.createElement('input');
  loginEmail.setAttribute('class', 'register');
  loginEmail.setAttribute('id', 'loginEmail');
  loginEmail.setAttribute('type', 'text');
  loginEmail.setAttribute('placeholder', 'Ingresa tu correo');
  loginEmail.setAttribute('autocomplete', 'off');

  const loginPass = document.createElement('input');
  loginPass.setAttribute('class', 'register');
  loginPass.setAttribute('id', 'loginPass');
  loginPass.setAttribute('type', 'password');
  loginPass.setAttribute('placeholder', 'Ingresa tu contraseña');
  loginPass.setAttribute('autocomplete', 'off');

  const loginButton = document.createElement('button');
  loginButton.setAttribute('class', 'registerButton');
  loginButton.setAttribute('id', 'loginButton');
  loginButton.textContent = 'Login';

  const buttonGmail = document.createElement('button');
  buttonGmail.setAttribute('class', 'button');
  buttonGmail.setAttribute('id', 'loginGoogle');
  buttonGmail.textContent = 'Inicia sesión con Gmail';

  containerInputLogin.appendChild(loginEmail);
  containerInputLogin.appendChild(loginPass);
  containerInputLogin.appendChild(buttonGmail); 

  containerLogin.appendChild(logo);
  containerLogin.appendChild(containerInputLogin);
  containerLogin.appendChild(buttonGmail);
  containerLoginAll.appendChild(arrowBack);
  containerLoginAll.appendChild(containerLogin);
  arrowBack.addEventListener('click', () => {
    onNavigate('/');
  });
  return containerLogin;
};
// `
// <a onclick="onNavigate('/'); return
//       false"><img class="arrowBack" src="img/Arrow.png"></img></a>
// <div class="containerLogin">
//   <img class="logo" src="img/logoSize.png">
//   <div class="containerInputR">
//     <input id="loginEmail" type="text" class="register" placeholder="Ingresa tu correo" autocomplete="off">
//     <input id="loginPass" type="password" class="register" placeholder="Ingresa tu contraseña" autocomplete="off">
//     <button id = "maskify" class = "maskify" onclick = "maskifyPassLogin()"> HERE</button>
//     <button id="loginButton" class="registerButton" onclick="loginFireBase(event)">Login</button>
//   </div>
//   <section class="githubGoogleButtons">
//     <button type="button" class="button" onclick="clickGoogle(event)">Inicia sesión con Gmail</button>
//     <button type="button" class="button">Inicia sesión con Github</button>
//   </section>
// </div>
// `;
function loginFireBase(e) {
  e.preventDefault();
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPass = document.getElementById("loginPass").value;
  console.log(loginEmail, loginPass);
  signIn(loginEmail, loginPass);
}
function clickGoogle(e) {
  e.preventDefault();
  loginGoogle();
}
function maskifyPassLogin() {
  const passWord = document.getElementById("loginPass");
  if (passWord.type === "password") {
    passWord.type = "text";
  } else {
    passWord.type = "password";
  }
}
window.loginFireBase = loginFireBase;
window.clickGoogle = clickGoogle;
window.maskifyPassLogin = maskifyPassLogin;
