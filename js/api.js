const SEND_URL = 'https://30.javascript.pages.academy/kekstagram/';
const DATA_URL = 'https://30.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess, onFail) => {
  fetch(DATA_URL)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });

};

export { getData, sendData };
