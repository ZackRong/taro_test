import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import moment from 'moment';
import defaultAvatarIcon from '@icons/user_avatar.png';
import './index.less';

class BasicInfo extends Component {
  render () {
    const prefixCls = 'announcement-detail-basic-info-component';
    const { creatorAvatarUrl, creatorNickName = '', createTime } = this.props;

    return (
      <View className={prefixCls}>
        <Image
          src={creatorAvatarUrl || defaultAvatarIcon}
          mode='aspectFill'
          className={`${prefixCls}-avatar-icon`}
        />
        <View className={`${prefixCls}-name-time`}>
          <View className='nick-name'>{creatorNickName}</View>
          <View className='time'>{createTime ? moment(createTime).format('MM-DD hh:mm') : ''}</View>
        </View>
      </View>
    )
  }
}

export default BasicInfo;
