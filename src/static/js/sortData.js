/**
  * @param {Array} data – массив CSS классов
  */
export function sortDataByFrequency(data) {
  let sortedData = [];
  let freqObj = {};

  /* Make object with frequency field. */
  data.forEach((name) => {
    if (freqObj[name]) {
      freqObj[name].frequency++;
    } else {
      freqObj[name] = {};
      freqObj[name].name = name;
      freqObj[name].frequency = 1;
    }
  });

  /* Turn object to array. */
  for (var key in freqObj) {
    if (freqObj.hasOwnProperty(key)) {
      let newObj = {}
      sortedData.push(freqObj[key]);
    }
  }

  /* Float up the most common names. */
  function floatUp(a,b) {
    if (a.frequency > b.frequency)
      return -1;
    if (a.frequency < b.frequency)
      return 1;
    return 0;
  }

  sortedData = sortedData.sort(floatUp).map((obj) => obj.name);
  return sortedData;
}
