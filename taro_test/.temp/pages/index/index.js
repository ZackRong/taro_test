import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text, Image, ScrollView } from '@tarojs/components';
import { AtMessage, AtToast } from 'taro-ui';
import { Content } from "../../components";
import { callApi, setQueryParam } from "../../utils";
import { API } from "../../conf";
import readIcon from "../../icons/forum_list_read_icon.png";
import './index.less';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '公告'
  };

  constructor() {
    super(...arguments);
    this.state = {
      announcementDTOs: [],
      loading: true,
      screenHeight: 667,
      nextPageAnchor: undefined
    };
  }

  componentWillMount() {
    this.listAnnouncement();
    Taro.getSystemInfo({
      success: res => {
        this.setState({ screenHeight: res.screenHeight });
      }
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  listAnnouncement = () => {
    const { communityId } = this.$router.params;
    const { nextPageAnchor, announcementDTOs = [] } = this.state;
    let data = {
      communityId,
      pageSize: 6
    };
    if (nextPageAnchor) {
      data.pageAnchor = nextPageAnchor;
    }
    callApi({
      api: API.listAnnouncement,
      data,
      success: response => {
        const { announcementDTOs: newAnnouncementDTOS = [], nextPageAnchor } = response || {};
        this.setState({
          announcementDTOs: announcementDTOs.concat(newAnnouncementDTOS),
          nextPageAnchor
        });
      },
      error: () => {
        Taro.atMessage({
          type: 'error',
          message: '公告列表获取失败'
        });
      },
      complete: () => {
        this.setState({ loading: false });
      }
    });
  };

  // 解析时间
  parseTime = time => {
    if (!time) {
      return;
    }
    const date = new Date(time);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    return `${month}-${day} ${hour}:${minute}`;
  };

  // 按规则返回查看次数
  getChildCount = childCount => {
    if (childCount <= 99) {
      return childCount;
    }
    if (childCount > 99 && childCount <= 999) {
      return '99+';
    }
    return '999+';
  };

  onScrollToLower = () => {
    const { nextPageAnchor } = this.state;
    if (nextPageAnchor) {
      this.setState({ loading: true }, this.listAnnouncement);
    }
  };

  // 进入详情页
  goDetail = id => {
    const { communityId } = this.$router.params;
    const query = setQueryParam({
      bulletinId: id,
      communityId
    });
    Taro.navigateTo({
      url: `/pages/detail/index${query}`
    });
  };

  render() {
    const prefixCls = 'announcement';
    const { announcementDTOs, loading, screenHeight } = this.state;

    return <View className="index">
        <AtMessage />
        <AtToast isOpened={loading} status="loading" text="正在加载" duration={8000} />
        <ScrollView scrollY
      // lowerThreshold={30}
      onScrollToLower={this.onScrollToLower} style={`height: ${screenHeight}px`} scrollWithAnimation>
          {announcementDTOs.map(announcement => {
          const { subject = '', id, content, createTime, childCount, embeddedJson } = announcement;

          return <View key={id} className={prefixCls} onClick={this.goDetail.bind(this, id)}>
                  <View className={`${prefixCls}-subject`}>{subject}</View>
                  <View className={`${prefixCls}-content`}>
                    {embeddedJson ? <Content embeddedJson={embeddedJson} /> : <View className="common-content">{content}</View>}
                  </View>
                  <View className={`${prefixCls}-bottom`}>
                    <Text className={`${prefixCls}-bottom-time`}>{this.parseTime(createTime)}</Text>
                    <View className={`${prefixCls}-bottom-views-wrapper`}>
                      <Image className={`${prefixCls}-bottom-views-wrapper-icon`} src={readIcon} />
                      <Text className={`${prefixCls}-bottom-views-wrapper-count`}>{this.getChildCount(childCount)}</Text>
                    </View>
                  </View>
                </View>;
        })}
        </ScrollView>
      </View>;
  }
}