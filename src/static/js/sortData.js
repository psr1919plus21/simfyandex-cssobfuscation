/**
  * @param {Array} data – массив CSS классов
  */
export function sortDataByFrequency(data) {
  let sortedData = [];
  let freqObj = {};

  data.forEach((name) => {
    if (freqObj[name]) {
      freqObj[name].frequency++;
    } else {
      freqObj[name] = {};
      freqObj[name].name = name;
      freqObj[name].frequency = 1;
    }


  });
  for (var key in freqObj) {
    if (freqObj.hasOwnProperty(key)) {
      let newObj = {}
      sortedData.push(freqObj[key]);
    }
  }

  function compare(a,b) {
    if (a.frequency > b.frequency)
      return -1;
    if (a.frequency < b.frequency)
      return 1;
    return 0;
  }

  sortedData = sortedData.sort(compare).map((obj) => obj.name);
  return sortedData;
}
