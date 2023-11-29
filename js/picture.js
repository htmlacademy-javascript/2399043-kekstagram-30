import {renderBigPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const drawSimilarPhoto = (photos) => {

  const fragment = document.createDocumentFragment();

  photos.forEach((photoData) => {
    const element = templateFragment.cloneNode(true);

    const elementImage = element.querySelector('.picture__img');
    const elementLikes = element.querySelector('.picture__likes');
    const elementComments = element.querySelector('.picture__comments');

    elementImage.src = photoData.url;
    elementImage.alt = photoData.description;
    elementLikes.textContent = photoData.likes;
    elementComments.textContent = photoData.comments.length;

    element.addEventListener('click', () => {
      renderBigPicture(photoData);
    });

    fragment.appendChild(element);
  });

  picturesContainer.appendChild(fragment);
};

export { drawSimilarPhoto };
