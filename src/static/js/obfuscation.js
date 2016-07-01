/**
  * @param {Array} data – массив CSS классов
  */
module.exports = function(data) {
  let classesObj = {};
  let currentLetter = 'a';

  data.forEach((className) => {
    if (!classesObj[className]) {
      classesObj[className] = currentLetter;
      currentLetter = String.fromCharCode(currentLetter.charCodeAt() + 1);
    }
  })
  return classesObj;
};
