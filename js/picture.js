import {onThumbnailClick} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const drawSimilarPhoto = (photos) => {

  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const element = templateFragment.cloneNode(true);

    const elementImage = element.querySelector('.picture__img');
    const elementLikes = element.querySelector('.picture__likes');
    const elementComments = element.querySelector('.picture__comments');

    elementImage.src = url;
    elementImage.alt = description;
    elementLikes.textContent = likes;
    elementComments.textContent = comments.length;

    fragment.appendChild(element);
  });

  picturesContainer.appendChild(fragment);

  const thumbnails = document.querySelectorAll('.picture');

  thumbnails.forEach((thumbnail, i) => {
    onThumbnailClick(thumbnail, photos[i]);
  });
};

export { drawSimilarPhoto };
