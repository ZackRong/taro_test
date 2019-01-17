import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { callApi } from '@utils';
import { API } from '@conf';

class Login extends Component {
  logon = () => {
    callApi({
      api: API.logon,
      data: {
        userIdentifier: 'root',
        password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
        namespaceId: '0'
      },
      success: (response) => {
        console.log(response)
        // Taro.redirectTo({
        //   url: `/pages/index/index?id=${response.uid}`
        // })
      }
    });
  }

  render() {
    return (
      <View>
        <AtButton type='primary' onClick={this.logon}>测试按钮</AtButton>
      </View>
    )
  }
}

export default Login;
