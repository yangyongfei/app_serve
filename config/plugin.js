  
'use strict';

// had enabled by egg
// exports.static = true;

exports.io = {
  enable: true,
  package: 'egg-socket.io',
};


exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

// 配置 egg-swagger-doc 插件信息。
exports.swaggerdoc = {
  enable: true,   // 是否启用。
  package: 'egg-swagger-doc', // 指定包名称。
};

// 配置 egg-sequelize 插件信息。
// exports.sequelize = {
//   enable: true, // 是否启用。
//   package: 'egg-sequelize', // 指定包名称。
// };