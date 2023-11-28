import { drawSimilarPhoto } from './picture.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import {showSuccesMessage, showErrorMessage } from './message.js';
import { showDataErrorMessage } from './util';
import {initFilter} from './filters.js';

getData(
  (photos) => {
    drawSimilarPhoto(photos);
    initFilter(photos);
  },
  () => showDataErrorMessage()
);

setUserFormSubmit(showSuccesMessage, showErrorMessage);
