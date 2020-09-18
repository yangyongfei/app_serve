/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 * 
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577782603774_7771';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // egg-swagger-doc 配置信息。
  exports.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径。
    // 接口文档的标题，描述或其它。
    apiInfo: {
        title: 'NAPI',  // 接口文档的标题。
        description: 'swagger-ui for NAPI document.',   // 接口文档描述。
        version: '1.0.0',   // 接口文档版本。
    },
    schemes: ['http', 'https'], // 配置支持的协议。
    consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
    produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
    securityDefinitions: {  // 配置接口安全授权方式。
        // apikey: {
        //   type: 'apiKey',
        //   name: 'clientkey',
        //   in: 'header',
        // },
        // oauth2: {
        //   type: 'oauth2',
        //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
        //   flow: 'password',
        //   scopes: {
        //     'write:access_token': 'write access_token',
        //     'read:access_token': 'read access_token',
        //   },
        // },
    },
    enableSecurity: false,  // 是否启用授权，默认 false（不启用）。
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
    routerMap: true,    // 是否启用自动生成路由，默认 true (启用)。
    enable: true,   // 默认 true (启用)。
  };

  

  exports.io = {
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [], // 针对消息的处理暂时不实现
      },
    },
  
    // cluster 模式下，通过 redis 实现数据共享
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'rxtd',
      // 密码
      password: 'yf6533490',
      // 数据库名
      database: 'shop',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  

  exports.wechat_config = {
    APPID:'wxd77416ea2b233e8b',
    SECRET:'b07d5036268670ed6832678f4cabafeb',
    token: 'wechat_public_number_demo',
  };
  

  exports.uploadDir = 'app/upload';
  return {
    ...config,
    ...userConfig,
  };
};
