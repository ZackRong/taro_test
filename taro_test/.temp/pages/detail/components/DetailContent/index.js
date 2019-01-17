import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Image, RichText } from '@tarojs/components';
import linkIcon from "../../../../icons/forum_list_link_icon.png";
import './index.less';

class DetailContent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      env: Taro.getEnv()
    };
  }
  // 跳转到第三方链接
  navigate = url => {
    const { env } = this.state;
    switch (env) {
      case Taro.ENV_TYPE.WEB:
        window.location.href = url;
        break;
      case Taro.ENV_TYPE.WEAPP:
        Taro.navigateTo({
          url: `/pages/external_link/index?src_url=${encodeURIComponent(url)}`
        });
      default:
        break;
    }
  };

  render() {
    const prefixCls = 'announcement-detail-content-component';
    let { content, embeddedJson, attachments = [] } = this.props;
    let contentType = '',
        richContent = '',
        title = '',
        cont = '',
        coverUri = '';
    let DOM = null;

    if (embeddedJson) {
      embeddedJson = JSON.parse(embeddedJson);
      contentType = embeddedJson.contentType;
      richContent = embeddedJson.richContent;
      title = embeddedJson.title;
      cont = embeddedJson.content;
      coverUri = embeddedJson.coverUri;
      // const { contentType, richContent, title, content: cont, coverUri } = embeddedJson;
      // 图文公告
      if (contentType === 'create') {
        DOM = <RichText nodes={richContent} />;
      } else if (contentType === 'forward') {
        // 链接
        DOM = <View className={`${prefixCls}-link-wrapper`} onClick={this.navigate.bind(this, cont)}>
          <View className="image" style={{ backgroundImage: `url(${coverUri || linkIcon})` }} />
          <View className="title">{title}</View>
        </View>;
      }
    } else {
      // 普通公告
      DOM = <View>
        <View className={`${prefixCls}-common-content`}>{content}</View>
        {attachments.map(attachment => {
          const { id, contentUrl } = attachment;
          return <Image className={`${prefixCls}-image`} src={contentUrl} key={id} />;
        })}
      </View>;
    }
    return <View className={prefixCls}>
        {DOM}
      </View>;
  }
}

DetailContent.defaultProps = {
  content: '',
  embeddedJson: null,
  attachments: []
};

export default DetailContent;