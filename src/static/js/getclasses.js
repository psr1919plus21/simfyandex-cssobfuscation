import request from 'request';

/**
  * @param {String}  – URL к файлу со списком классов
  */
module.exports = function(urlClasses) {
  let classList;

  let promise = new Promise((resolve, reject) => {
    return request({
      url: urlClasses,
      json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            classList = body;
            resolve(classList);
        }
        reject('error');
    })
  });
  return promise;
}
