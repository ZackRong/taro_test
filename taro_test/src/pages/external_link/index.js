import Taro, { Component } from '@tarojs/taro';
import { WebView } from '@tarojs/components';

class ExternalLink extends Component {
  render () {
    const { src_url } = this.$router.params;

    return (
      <WebView src={decodeURIComponent(src_url)} />
    )
  }
}

export default ExternalLink;
