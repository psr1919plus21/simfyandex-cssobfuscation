import {sortDataByFrequency} from './sortData';

/** Модуль obfuscation. Этот модуль выполняет обфускацию CSS классов.
  * @module obfuscation
  */

/**
  * @param { String } startLetter – начальная строка для формирования имен классов.
  * @returns { String } – предыдущее состояние.
  */
function getPrevState (startLetter) {
  let prevStartChar = String.fromCharCode(startLetter[startLetter.length - 1].charCodeAt() - 1);
  startLetter = startLetter.slice(0, startLetter.length - 1);
  return startLetter += prevStartChar;
}



/**
  * @param {Array} data – массив CSS классов.
  * @param {String} _startLetter – начальная строка для генерации имен классов.
  * @returns {Object} – объект с парами ключ:значение содержащий новые и старые имена классов.
  */
function makeObfuscation(data, _startLetter = 'a') {
  data = sortDataByFrequency(data);
  _startLetter = getPrevState(_startLetter);

  const Z_CHAR = 122;
  let classesObj = {};
  let newClassName = _startLetter;

  data.forEach((className) => {
    if (!classesObj[className]) {
      let lastLetter = newClassName[newClassName.length - 1].charCodeAt();

      if (lastLetter === Z_CHAR) {
        newClassName = newClassName.slice(0, newClassName.length - 1);
        let prevLetter = newClassName[newClassName.length - 1];

        if (prevLetter && prevLetter.charCodeAt() !== Z_CHAR) {
          newClassName = newClassName.slice(0, newClassName.length - 1);
          let upPrevLetter = String.fromCharCode(prevLetter.charCodeAt() + 1);
          newClassName += upPrevLetter;
        } else {
          newClassName += 'a';
        }
        newClassName += 'a';
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

module.exports = makeObfuscation;
