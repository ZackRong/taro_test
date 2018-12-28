import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import { AtMessage, AtToast } from 'taro-ui';
import { callApi } from "../../utils";
import { API } from "../../conf";
import './index.less';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '公告'
  };

  constructor() {
    super(...arguments);
    this.state = {
      announcementDTOs: [],
      loading: true
    };
  }

  componentWillMount() {
    this.listAnnouncement();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  listAnnouncement = () => {
    const { communityId } = this.$router.params;

    callApi({
      url: API.listAnnouncement,
      data: {
        communityId,
        pageSize: 10
      },
      success: response => {
        const { announcementDTOs = [] } = response || {};
        this.setState({
          announcementDTOs
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

  render() {
    const { announcementDTOs, loading } = this.state;
    console.log(announcementDTOs);
    return <View className="index">
        <AtMessage />
        <AtToast isOpened={loading} status="loading" text="正在加载" />
      </View>;
  }
}