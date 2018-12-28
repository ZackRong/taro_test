import Taro from '@tarojs/taro-h5';
import Nerv from "nervjs";
// const proxy = require('../../package.json').proxy;
const proxy = 'http://opv2-beta.zuolin.com';
// const apiBase = `${process.env.NODE_ENV === 'development' ? proxy : window.location.origin}/evh`;
const apiBase = `${window && window.location ? window.location.origin : 'http://opv2-beta.zuolin.com'}/evh`;
const callApi = ({ url = '', method = 'POST', data = {}, success, error, complete }) => {
  Taro.request({
    url: `${apiBase}${url}`,
    method,
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
  }).then((res = {}) => {
    const { errorCode, errorDescription = '', response = {} } = res.data || {};
    if (Number(errorCode) === 200) {
      let bigNumber = response;
      if (JSON.stringify(bigNumber) !== '{}') {
        bigNumber = JSON.stringify(bigNumber);
        bigNumber = bigNumber.replace(/([^\\])":(\d{15,})/g, '$1":"$2"').replace(/([\\])":(\d{15,})/g, '$1":\\"$2\\"');
        bigNumber = JSON.parse(bigNumber);
      }
      success && success(bigNumber);
    } else {
      error && error({ errorCode, errorDescription });
    }
    complete && complete();
  }).catch(err => {
    console.error(err);
    complete && complete();
  });
};

export default callApi;