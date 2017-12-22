# core-cms
基于vue2 + axios + vue-router + vuex + vee-validate + jsdoc + mockjs + 测试 + 日志 +等的基础cms

### 目录结构

```
.
├── README.md           
├── dist                     // 项目build目录
├── test                     // 测试目录
├── src                      // 生产目录
│   ├── api                  // 业务请求
│   ├── assets               // css 和图片资源
│   ├── components           // 公共组件
│   ├── mixins               // 工具函数
│   └── store                // vuex相关文件,处理全局状态数据
│   └── config               // api url, cookie domain等配置文件
│   └── vendors              // 第三方插件
│   └── views                // 业务页面
│   └── index.html           // 主页html
│   └── routes.js            // 路由配置
│   └── index.js             // 入口文件
├── .babelrc                 // babel配置
├── .eslintrc.json           // eslint配置
├── History.md               // 更新日志
├── webpack.config.js        // Webpack 配置文件
```

## TODO:
- [x] 结构搭建
- [x] 权限管理
-    公共组件
-    集成七牛
-    集成表格

