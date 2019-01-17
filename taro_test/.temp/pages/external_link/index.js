import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { WebView } from '@tarojs/components';

class ExternalLink extends Component {
  render() {
    const { src_url } = this.$router.params;

    return <WebView src={decodeURIComponent(src_url)} />;
  }
}

export default ExternalLink;