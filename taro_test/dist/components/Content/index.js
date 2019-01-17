"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linkIcon = "/icons/forum_list_link_icon.png";

var Content = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Content, _BaseComponent);

  function Content() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "prefixCls", "contentType", "content", "title", "embeddedJson"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Content, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Content.prototype.__proto__ || Object.getPrototypeOf(Content.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var prefixCls = 'announcement-content-component';
      var embeddedJson = this.__props.embeddedJson;

      var parseEmbeddedJson = {};
      if (embeddedJson) {
        parseEmbeddedJson = JSON.parse(embeddedJson);
      }
      var _parseEmbeddedJson = parseEmbeddedJson,
          contentType = _parseEmbeddedJson.contentType,
          richContent = _parseEmbeddedJson.richContent,
          coverUri = _parseEmbeddedJson.coverUri,
          title = _parseEmbeddedJson.title;

      var content = null;
      if (richContent) {
        content = richContent.replace(/<img[^>]+>/g, '');
      }

      var anonymousState__temp = contentType === 'forward' ? (0, _index.internal_inline_style)({ backgroundImage: "url(" + (coverUri || linkIcon) + ")" }) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        prefixCls: prefixCls,
        contentType: contentType,
        content: content,
        title: title
      });
      return this.__state;
    }
  }]);

  return Content;
}(_index.Component), _class.properties = {
  "embeddedJson": {
    "type": null,
    "value": null
  }
}, _class.$$events = [], _temp2);
exports.default = Content;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Content));