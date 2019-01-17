"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linkIcon = "/icons/forum_list_link_icon.png";

var DetailContent = (_temp2 = _class = function (_BaseComponent) {
  _inherits(DetailContent, _BaseComponent);

  function DetailContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DetailContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DetailContent.__proto__ || Object.getPrototypeOf(DetailContent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "loopArray0", "contentType", "richContent", "prefixCls", "cont", "attachments", "content", "embeddedJson", "title", "env"], _this.navigate = function (url) {
      var env = _this.state.env;

      switch (env) {
        case _index2.default.ENV_TYPE.WEB:
          window.location.href = url;
          break;
        case _index2.default.ENV_TYPE.WEAPP:
          _index2.default.navigateTo({
            url: "/pages/external_link/index?src_url=" + encodeURIComponent(url)
          });
        default:
          break;
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DetailContent, [{
    key: "_constructor",
    value: function _constructor() {
      _get(DetailContent.prototype.__proto__ || Object.getPrototypeOf(DetailContent.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        env: _index2.default.getEnv()
      };
    }
    // 跳转到第三方链接

  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;
      var loopArray0 = void 0;

      var prefixCls = 'announcement-detail-content-component';
      var _props = this.__props,
          content = _props.content,
          embeddedJson = _props.embeddedJson,
          _props$attachments = _props.attachments,
          attachments = _props$attachments === undefined ? [] : _props$attachments;

      var contentType = '',
          richContent = '',
          title = '',
          cont = '',
          coverUri = '';
      var DOM = null;

      if (embeddedJson) {
        embeddedJson = JSON.parse(embeddedJson);
        contentType = embeddedJson.contentType;
        richContent = embeddedJson.richContent;
        title = embeddedJson.title;
        cont = embeddedJson.content;
        coverUri = embeddedJson.coverUri;
        // const { contentType, richContent, title, content: cont, coverUri } = embeddedJson;
        // 图文公告
        if (contentType === 'create') {} else if (contentType === 'forward') {
          _$anonymousState__temp = (0, _index.internal_inline_style)({ backgroundImage: "url(" + (coverUri || linkIcon) + ")" }); // 链接
        }
        loopArray0 = attachments.map(function (attachment) {
          attachment = {
            $original: (0, _index.internal_get_original)(attachment)
          };

          var _attachment$$original = attachment.$original,
              id = _attachment$$original.id,
              contentUrl = _attachment$$original.contentUrl;

          return {
            id: id,
            contentUrl: contentUrl,
            $original: attachment.$original
          };
        });
      } else {}
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        loopArray0: loopArray0,
        contentType: contentType,
        richContent: richContent,
        prefixCls: prefixCls,
        cont: cont,
        attachments: attachments,
        content: content,
        embeddedJson: embeddedJson,
        title: title
      });
      return this.__state;
    }
  }]);

  return DetailContent;
}(_index.Component), _class.properties = {
  "content": {
    "type": null,
    "value": null
  },
  "embeddedJson": {
    "type": null,
    "value": null
  },
  "attachments": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["navigate"], _temp2);


DetailContent.defaultProps = {
  content: '',
  embeddedJson: null,
  attachments: []
};

exports.default = DetailContent;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(DetailContent));