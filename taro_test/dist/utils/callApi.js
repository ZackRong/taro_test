'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const proxy = require('../../package.json').proxy;
var proxy = 'http://opv2-beta.zuolin.com';
// const apiBase = `${process.env.NODE_ENV === 'development' ? proxy : window.location.origin}/evh`;
var apiBase = (window && window.location ? window.location.origin : 'http://opv2-beta.zuolin.com') + '/evh';
var callApi = function callApi(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'POST' : _ref$method,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      success = _ref.success,
      error = _ref.error,
      complete = _ref.complete;

  _index2.default.request({
    url: '' + apiBase + url,
    method: method,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
  }).then(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref2 = res.data || {},
        errorCode = _ref2.errorCode,
        _ref2$errorDescriptio = _ref2.errorDescription,
        errorDescription = _ref2$errorDescriptio === undefined ? '' : _ref2$errorDescriptio,
        _ref2$response = _ref2.response,
        response = _ref2$response === undefined ? {} : _ref2$response;

    if (Number(errorCode) === 200) {
      var bigNumber = response;
      if (JSON.stringify(bigNumber) !== '{}') {
        bigNumber = JSON.stringify(bigNumber);
        bigNumber = bigNumber.replace(/([^\\])":(\d{15,})/g, '$1":"$2"').replace(/([\\])":(\d{15,})/g, '$1":\\"$2\\"');
        bigNumber = JSON.parse(bigNumber);
      }
      success && success(bigNumber);
    } else {
      error && error({ errorCode: errorCode, errorDescription: errorDescription });
    }
    complete && complete();
  }).catch(function (err) {
    console.error(err);
    complete && complete();
  });
};

exports.default = callApi;