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

var readIcon = "/icons/forum_list_read_icon.png";

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "loading", "screenHeight", "prefixCls", "announcementDTOs", "readIcon", "nextPageAnchor"], _this.config = {
      navigationBarTitleText: '公告'
    }, _this.listAnnouncement = function () {
      var communityId = _this.$router.params.communityId;
      var _this$state = _this.state,
          nextPageAnchor = _this$state.nextPageAnchor,
          _this$state$announcem = _this$state.announcementDTOs,
          announcementDTOs = _this$state$announcem === undefined ? [] : _this$state$announcem;

      var data = {
        communityId: communityId,
        pageSize: 6
      };
      if (nextPageAnchor) {
        data.pageAnchor = nextPageAnchor;
      }
      (0, _index3.callApi)({
        api: _conf.API.listAnnouncement,
        data: data,
        success: function success(response) {
          var _ref2 = response || {},
              _ref2$announcementDTO = _ref2.announcementDTOs,
              newAnnouncementDTOS = _ref2$announcementDTO === undefined ? [] : _ref2$announcementDTO,
              nextPageAnchor = _ref2.nextPageAnchor;

          _this.setState({
            announcementDTOs: announcementDTOs.concat(newAnnouncementDTOS),
            nextPageAnchor: nextPageAnchor
          });
        },
        error: function error() {
          _index2.default.atMessage({
            type: 'error',
            message: '公告列表获取失败'
          });
        },
        complete: function complete() {
          _this.setState({ loading: false });
        }
      });
    }, _this.parseTime = function (time) {
      if (!time) {
        return;
      }
      var date = new Date(time);
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();

      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;

      return month + "-" + day + " " + hour + ":" + minute;
    }, _this.getChildCount = function (childCount) {
      if (childCount <= 99) {
        return childCount;
      }
      if (childCount > 99 && childCount <= 999) {
        return '99+';
      }
      return '999+';
    }, _this.onScrollToLower = function () {
      var nextPageAnchor = _this.state.nextPageAnchor;

      if (nextPageAnchor) {
        _this.setState({ loading: true }, _this.listAnnouncement);
      }
    }, _this.goDetail = function (id) {
      var communityId = _this.$router.params.communityId;

      var query = (0, _index3.setQueryParam)({
        bulletinId: id,
        communityId: communityId
      });
      _index2.default.navigateTo({
        url: "/pages/detail/index" + query
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        announcementDTOs: [],
        loading: true,
        screenHeight: 667,
        nextPageAnchor: undefined
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.listAnnouncement();
      _index2.default.getSystemInfo({
        success: function success(res) {
          _this2.setState({ screenHeight: res.screenHeight });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}

    // 解析时间


    // 按规则返回查看次数


    // 进入详情页

  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var prefixCls = 'announcement';
      var _state = this.__state,
          announcementDTOs = _state.announcementDTOs,
          loading = _state.loading,
          screenHeight = _state.screenHeight;


      var loopArray0 = announcementDTOs.map(function (announcement) {
        announcement = {
          $original: (0, _index.internal_get_original)(announcement)
        };

        var _announcement$$origin = announcement.$original,
            _announcement$$origin2 = _announcement$$origin.subject,
            subject = _announcement$$origin2 === undefined ? '' : _announcement$$origin2,
            id = _announcement$$origin.id,
            content = _announcement$$origin.content,
            createTime = _announcement$$origin.createTime,
            childCount = _announcement$$origin.childCount,
            embeddedJson = _announcement$$origin.embeddedJson;


        var $loopState__temp2 = _this3.parseTime(createTime);
        var $loopState__temp4 = _this3.getChildCount(childCount);
        return {
          id: id,
          content: content,
          createTime: createTime,
          childCount: childCount,
          embeddedJson: embeddedJson,
          subject: subject,
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: announcement.$original
        };
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        prefixCls: prefixCls,
        readIcon: readIcon
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.properties = {}, _class.$$events = ["onScrollToLower", "goDetail"], _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));