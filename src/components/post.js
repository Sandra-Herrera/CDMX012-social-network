export function renderPost(doc) {
  const sectionPost = document.createElement('div');
  sectionPost.setAttribute('class', 'sectionPost');

  const templateTop = document.createElement('div');
  templateTop.setAttribute('class', 'templateTop');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('src', 'img/profilePicture.png');

  const profileName = document.createElement('label');
  profileName.setAttribute('id', 'profileName');

  const dots = document.createElement('img');
  dots.setAttribute('src', 'img/dots.png');

  const pPost = document.createElement('p');
  pPost.setAttribute('id', 'inputPost');
  pPost.setAttribute('data-id', doc.id);
  pPost.textContent = doc.data().post;

  const likeComment = document.createElement('div');
  likeComment.setAttribute('id', 'likeComment');

  const postDate = document.createElement('p');
  postDate.setAttribute('id', 'postDate');
  postDate.textContent = doc.data().date;

  const likeIcon = document.createElement('img');
  likeIcon.setAttribute('src', 'img/like.png');

  const commentIcon = document.createElement('img');
  commentIcon.setAttribute('src', 'img/comment.png');

  const commentInput = document.createElement('input');
  commentInput.setAttribute('id', 'commentInput');

  templateTop.append(profilePic, profileName, dots);
  likeComment.append(likeIcon, commentIcon);
  sectionPost.append(templateTop, pPost, likeComment, commentInput);

  const wall = document.getElementById('postFeed');
  wall.append(sectionPost);
  // dejamos el return para los tests - no cambia en el html quitarlo o ponerlo
  return sectionPost;
}
// export const templatePost = (doc) => {
//   const templateHola = `
//   <div class="templateTop">
//     <img id="profilePicture" src="img/profilePicture.png"></img>
//     <label class="profileName"></label>
//     <img id="dots" src="img/dots.png"></img>
//   </div>
//   <p id="inputPost">${Object.values(doc.post).join(' ')}</p>
// <div id="likeComment">
// <p> ${Object.values(doc.date).join(' ')} </p>
//   <img id="likePost" src="img/like.png"></img>
//   <img id="commentPost" src="img/comment.png">${Object.values(doc.Data().comment)}</img>
// </div>
// `;
//   sectionPost.innerHTML = templateHola;
//   return sectionPost;
// };
