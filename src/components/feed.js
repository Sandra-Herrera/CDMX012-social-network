// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';
import { readData, savePost } from './FireStore.js';
// eslint-disable-next-line import/no-cycle
import { modal } from './modal.js';
// eslint-disable-next-line import/no-cycle
import { signOutSession } from '../lib/firebase.js';

export const feed = () => {
  const feedView = document.createElement('div');
  feedView.setAttribute('id', 'feedView');

  const header = document.createElement('div');
  header.setAttribute('id', 'feedHeader');

  const logoFeed = document.createElement('img');
  logoFeed.setAttribute('src', 'img/Icono_.png');
  logoFeed.setAttribute('id', 'logoFeed');

  const writePost = document.createElement('div');
  writePost.setAttribute('class', 'sectionPost');
  const createTop = document.createElement('div');
  createTop.setAttribute('class', 'templateTop');

  const namePost = document.createElement('label');
  namePost.setAttribute('class', 'profileName');
  namePost.textContent = 'Ana';

  const inputPost = document.createElement('input');
  inputPost.setAttribute('id', 'inputPost');
  inputPost.setAttribute('placeholder', '¿Que estas pensando?');

  const sendPost = document.createElement('button');
  sendPost.setAttribute('id', 'sendPost');
  sendPost.textContent = 'Publicar';

  const searchFeed = document.createElement('input');
  searchFeed.setAttribute('class', 'register');
  searchFeed.setAttribute('id', 'searchFeed');
  searchFeed.setAttribute('placeholder', 'Buscar...');

  const readDiv = document.createElement('div');
  const postFeed = document.createElement('div');
  postFeed.setAttribute('id', 'postFeed');

  const footer = document.createElement('div');
  footer.setAttribute('id', 'feedFooter');
  const showModal = document.createElement('div');
  showModal.setAttribute('id', 'showModal');

  const logOutFeed = document.createElement('img');
  logOutFeed.setAttribute('src', 'img/logOut.png');
  logOutFeed.setAttribute('id', 'logOutFeed');
  const writeFeed = document.createElement('img');
  writeFeed.setAttribute('src', 'img/writePost.png');
  writeFeed.setAttribute('id', 'writeFeed');
  const homeFeed = document.createElement('img');
  homeFeed.setAttribute('src', 'img/Home.png');
  homeFeed.setAttribute('id', 'homeFeed');
  const profileFeed = document.createElement('img');
  profileFeed.setAttribute('id', 'profileFeed');
  profileFeed.setAttribute('src', 'img/Profile.png');

  feedView.appendChild(header);
  feedView.appendChild(postFeed);
  feedView.appendChild(footer);
  feedView.append(showModal);
  postFeed.appendChild(writePost);
  postFeed.appendChild(readDiv);
  writePost.appendChild(createTop);
  createTop.appendChild(namePost);
  writePost.appendChild(inputPost);
  writePost.appendChild(sendPost);
  header.appendChild(logoFeed);
  header.appendChild(searchFeed);
  footer.appendChild(logOutFeed);
  footer.appendChild(writeFeed);
  footer.appendChild(homeFeed);
  footer.appendChild(profileFeed);

  logOutFeed.addEventListener('click', (e) => {
    e.preventDefault();
    while (showModal.firstChild) {
      showModal.removeChild(modal(signOutSession));
    }
    showModal.appendChild(modal(signOutSession));
  });
  sendPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = document.getElementById('inputPost').value;
    const datePost = new Date();
    console.log(textPost, datePost);
    savePost(textPost, datePost);
  });
  readData();
  return feedView;
};
