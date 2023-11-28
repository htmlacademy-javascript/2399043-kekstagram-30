import { isEscape } from './util.js';

const COMMENTS_STEP = 5;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const image = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const caption = bigPicture.querySelector('.social__caption');
const commentList = bigPicture.querySelector('.social__comments');
const commentItem = bigPicture.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsShownCountElement = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCountElement = bigPicture.querySelector('.social__comment-total-count');

let commentsCountShown = 0;
let comments = [];

const onPopupEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    onCloseBigPicture();
  }
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

function onCloseBigPicture () {
  commentsCountShown = 0;
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const createComment = ({ avatar, name, message }) => {
  const newComment = commentItem.cloneNode(true);

  const commentImage = newComment.querySelector('.social__picture');
  const commentText = newComment.querySelector('.social__text');

  commentImage.src = avatar;
  commentImage.alt = name;
  commentText.textContent = message;

  return newComment;
};

const renderComments = () => {
  commentsCountShown += COMMENTS_STEP;

  if (commentsCountShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsCountShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentList.textContent = '';
  commentList.append(fragment);

  commentsShownCountElement.textContent = commentsCountShown;
  commentsTotalCountElement.textContent = comments.length;
};

const onCommentsLoaderClick = () => renderComments();

const renderBigPicture = ({ url, description, likes }) => {
  image.src = url;
  image.alt = description;
  likesCount.textContent = likes;
  caption.textContent = description;
};

const onThumbnailClick = (thumbnail, photoData) => {
  thumbnail.addEventListener('click', () => {
    renderBigPicture(photoData);

    comments = photoData.comments;
    if (comments.length > 0) {
      renderComments();
    }

    openBigPicture();
  });
};

closeBigPictureButton.addEventListener('click', onCloseBigPicture);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {onThumbnailClick, onCloseBigPicture};
