const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      //if error, reject the Promise and send the error to the Promise's .catch() method
      if (err) {
        reject(err);
        // if error, empty return to make sure Promise doesn't execute resolve as well 
        return;
      }

      //if everything went okay, resolve Promise, send response to the .then() method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

const copyFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      //if error, reject the Promise and send the error to the Promise's .catch() method
      if (err) {
        reject(err);
        // if error, empty return to make sure Promise doesn't execute resolve as well 
        return;
      }

      //if everything went okay, resolve Promise, send response to the .then() method
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
  });
};

module.exports = { writeFile, copyFile };