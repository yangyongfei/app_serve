'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  //客户端
  router.get('/minapp/seckill/list', controller.home.seckillList);

  // //管理系统
  // router.get('/admin', controller.admin.index);
  // router.get('/admin/list', controller.admin.list);
  // router.get('/admin/edit', controller.admin.edit);
  // router.get('/admin/add', controller.admin.add);
  // router.get('/admin/delate', controller.admin.delate);
  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
};