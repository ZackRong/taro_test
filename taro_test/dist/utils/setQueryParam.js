'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setQueryParams = function setQueryParams(paramsObj) {
  if (Object.prototype.toString.call(paramsObj) !== '[object Object]') {
    console.log('params must be an object');
    return '';
  }

  var query = '';
  for (var k in paramsObj) {
    if (paramsObj[k] !== undefined && paramsObj[k] !== 'undefined' && paramsObj[k] !== '') {
      if (query != '') {
        query += '&';
      }
      query += k + '=' + paramsObj[k];
    }
  }

  return query === '' ? '' : '?' + query;
};

exports.default = setQueryParams;