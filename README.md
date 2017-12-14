# core-cms
基于vue2的基础cms

### 目录结构

```
.
├── README.md           
├── dist                     // 项目build目录
├── test                     // 测试目录
├── src                      // 生产目录
│   ├── api                  // API 请求
│   ├── assets               // css 和图片资源
│   ├── components           // 公共组件
│   ├── mixins               // 工具函数
│   ├── libs                 // 第三方工具函数
│   └── store            		 // vuex相关文件,处理全局状态数据
│   └── config.js            // api url, cookie domain等配置文件
│   └── index.html           // 主页html
│   └── routes.js            // 路由配置
│   └── index.js             // 入口文件
├── .babelrc                 // babel配置
├── .eslintrc.json           // eslint配置
├── History.md               // 更新日志
├── process.json             // pm2配置文件
├── server.js                // 生产环境启动server
├── webpack.config.js        // Webpack 配置文件
```

## TODO:
- [] 权限管理
- [] mixins
- [] libs
- [] config
- [] components
- [] test
