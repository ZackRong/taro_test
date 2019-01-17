import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtMessage, AtToast } from 'taro-ui';
import { callApi } from '@utils';
import { API } from '@conf';
import { BasicInfo, DetailContent } from './components';
import './index.less';

class Detail extends Component {
  config = {
    navigationBarTitleText: '详情'
  }

  constructor() {
    super(...arguments);
    this.state = {
      topicInfo: {},
      loading: true
    }
  }

  componentDidMount() {
    this.getAnnouncement();
  }

  // 分享(目前只能在小程序中测试，不知道是否兼容web)
  onShareAppMessage = (title) => {
    return ({
      title: title || '测试分享',
      path: `/pages/detail/index?communityId=240111044332061457&bulletinId=425382`
    })
  }

  getAnnouncement = () => {
    const { bulletinId, communityId } = this.$router.params;
    callApi({
      api: API.getAnnouncement,
      data: {
        announcementId: bulletinId,
        communityId
      },
      success: (response = {}) => {
        this.setState({ topicInfo: response })
        this.onShareAppMessage(response.subject || '');
      },
      error: () => {
        Taro.atMessage({
          type: 'error',
          message: '公告详情获取失败'
        });
      },
      complete: () => {
        this.setState({ loading: false })
      }
    });
  }

  render() {
    const prefixCls = 'announcement-detail';
    const { topicInfo, loading } = this.state;
    const { subject = '', creatorAvatarUrl, creatorNickName = '', createTime, content = '', attachments = [], embeddedJson = null } = topicInfo;

    return (
      <View className={prefixCls}>
        <AtMessage />
        <AtToast
          isOpened={loading}
          status='loading'
          text='正在加载'
          duration={8000}
        />
        {
          loading ? null : (
            <View>
              <View className={`${prefixCls}-subject`}>{subject}</View>
              <BasicInfo
                creatorAvatarUrl={creatorAvatarUrl}
                creatorNickName={creatorNickName}
                createTime={createTime}
              />
              <DetailContent
                content={content}
                attachments={attachments}
                embeddedJson={embeddedJson}
              />
            </View>
          )
        }
      </View>
    )
  }
}

export default Detail;
