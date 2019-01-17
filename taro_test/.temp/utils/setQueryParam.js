const setQueryParams = paramsObj => {
  if (Object.prototype.toString.call(paramsObj) !== '[object Object]') {
    console.log('params must be an object');
    return '';
  }

  let query = '';
  for (let k in paramsObj) {
    if (paramsObj[k] !== undefined && paramsObj[k] !== 'undefined' && paramsObj[k] !== '') {
      if (query != '') {
        query += '&';
      }
      query += `${k}=${paramsObj[k]}`;
    }
  }

  return query === '' ? '' : `?${query}`;
};

export default setQueryParams;