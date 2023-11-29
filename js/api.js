const apiUrl = 'https://30.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess, onFail) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(apiUrl, {
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
