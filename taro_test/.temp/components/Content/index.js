import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, RichText } from '@tarojs/components';
import linkIcon from "../../icons/forum_list_link_icon.png";
import './index.less';

class Content extends Component {
  render() {
    const prefixCls = 'announcement-content-component';
    const { embeddedJson } = this.props;
    let parseEmbeddedJson = {};
    if (embeddedJson) {
      parseEmbeddedJson = JSON.parse(embeddedJson);
    }
    const { contentType, richContent, coverUri, title } = parseEmbeddedJson;
    let content = null;
    if (richContent) {
      content = richContent.replace(/<img[^>]+>/g, '');
    }

    return <View className={prefixCls}>
        {contentType === 'forward' ? <View className={`${prefixCls}-rich-text-wrapper`}>
              <View className={`${prefixCls}-rich-text-wrapper-image`} style={{ backgroundImage: `url(${coverUri || linkIcon})` }} />
              <View className={`${prefixCls}-rich-text-wrapper-title`}>{title}</View>
            </View> : <RichText nodes={content} />}
      </View>;
  }
}

export default Content;