export const toBlob = (object) => new Blob([JSON.stringify(object, null, 2)], { type: 'application/json' });

export const toJson = (message) => {
  return new Promise((resolve) => {
    message.data.text().then(data => {
      resolve(data);
    });
  });
}