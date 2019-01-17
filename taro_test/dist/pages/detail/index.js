"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../utils/index.js");

var _conf = require("../../conf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["prefixCls", "loading", "creatorAvatarUrl", "creatorNickName", "createTime", "content", "attachments", "embeddedJson", "subject", "topicInfo"], _this.config = {
      navigationBarTitleText: '详情'
    }, _this.onShareAppMessage = function (title) {
      return {
        title: title || '测试分享',
        path: "/pages/detail/index?communityId=240111044332061457&bulletinId=425382"
      };
    }, _this.getAnnouncement = function () {
      var _this$$router$params = _this.$router.params,
          bulletinId = _this$$router$params.bulletinId,
          communityId = _this$$router$params.communityId;

      (0, _index3.callApi)({
        api: _conf.API.getAnnouncement,
        data: {
          announcementId: bulletinId,
          communityId: communityId
        },
        success: function success() {
          var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _this.setState({ topicInfo: response });
          _this.onShareAppMessage(response.subject || '');
        },
        error: function error() {
          _index2.default.atMessage({
            type: 'error',
            message: '公告详情获取失败'
          });
        },
        complete: function complete() {
          _this.setState({ loading: false });
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        topicInfo: {},
        loading: true
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAnnouncement();
    }

    // 分享(目前只能在小程序中测试，不知道是否兼容web)

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var prefixCls = 'announcement-detail';
      var _state = this.__state,
          topicInfo = _state.topicInfo,
          loading = _state.loading;
      var _topicInfo$subject = topicInfo.subject,
          subject = _topicInfo$subject === undefined ? '' : _topicInfo$subject,
          creatorAvatarUrl = topicInfo.creatorAvatarUrl,
          _topicInfo$creatorNic = topicInfo.creatorNickName,
          creatorNickName = _topicInfo$creatorNic === undefined ? '' : _topicInfo$creatorNic,
          createTime = topicInfo.createTime,
          _topicInfo$content = topicInfo.content,
          content = _topicInfo$content === undefined ? '' : _topicInfo$content,
          _topicInfo$attachment = topicInfo.attachments,
          attachments = _topicInfo$attachment === undefined ? [] : _topicInfo$attachment,
          _topicInfo$embeddedJs = topicInfo.embeddedJson,
          embeddedJson = _topicInfo$embeddedJs === undefined ? null : _topicInfo$embeddedJs;


      Object.assign(this.__state, {
        prefixCls: prefixCls,
        creatorAvatarUrl: creatorAvatarUrl,
        creatorNickName: creatorNickName,
        createTime: createTime,
        content: content,
        attachments: attachments,
        embeddedJson: embeddedJson,
        subject: subject
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class.properties = {}, _class.$$events = [], _temp2);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));