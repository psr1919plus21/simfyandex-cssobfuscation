/**
 * @param { String } startLetter – начальная строка для формирования имен классов
 */
function getPrevState (startLetter) {
  let prevStartChar = String.fromCharCode(startLetter[startLetter.length - 1].charCodeAt() - 1);
  startLetter = startLetter.slice(0, startLetter.length - 1);
  return startLetter += prevStartChar;
}

/**
  * @param {Array} data – массив CSS классов
  */
module.exports = function(data, _startLetter = 'a') {
  _startLetter = getPrevState(_startLetter);

  const Z_CHAR = 122;
  let classesObj = {};
  let newClassName = _startLetter;

  data.forEach((className) => {
    if (!classesObj[className]) {
      if (newClassName[newClassName.length - 1].charCodeAt() === Z_CHAR) {
        newClassName = newClassName.slice(0, newClassName.length - 1);
        newClassName += 'aa';
      } else {
        let newCharacter = String.fromCharCode(newClassName[newClassName.length - 1].charCodeAt() + 1);
        newClassName = newClassName.slice(0, newClassName.length - 1);
        newClassName += newCharacter;
      }
      classesObj[className] = newClassName;
    }
  })
  return classesObj;
};
