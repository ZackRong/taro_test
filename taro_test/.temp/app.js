import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";

import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Taro from '@tarojs/taro-h5';
import { Router } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
class App extends Component {

  config = {
    pages: ['pages/index/index', 'pages/login/index', 'pages/detail/index', 'pages/external_link/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Router mode={"hash"} publicPath={"/"} routes={[{
      path: '/pages/index/index',
      componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
      isIndex: true
    }, {
      path: '/pages/login/index',
      componentLoader: () => import( /* webpackChunkName: "login_index" */'./pages/login/index'),
      isIndex: false
    }, {
      path: '/pages/detail/index',
      componentLoader: () => import( /* webpackChunkName: "detail_index" */'./pages/detail/index'),
      isIndex: false
    }, {
      path: '/pages/external_link/index',
      componentLoader: () => import( /* webpackChunkName: "external_link_index" */'./pages/external_link/index'),
      isIndex: false
    }]} />;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);

    Taro._set$app(this);
  }

}

Nerv.render(<App />, document.getElementById('app'));