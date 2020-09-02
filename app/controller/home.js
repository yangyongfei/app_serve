'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.home.index();
    var data = await this.ctx.curl('http://ah.annoroad.com:50002/annoroad-report-currency/openApi/annoroadGuanware/find?idcard=530302199111100914&mobile=17301398562');
	  console.log(user);
    ctx.body = data;
  }
  async list() {
    const { ctx } = this;
	const user = await ctx.service.home.user()
    ctx.body = 'list';
  }
  async articleList() {
	const { ctx } = this;
	const list = await ctx.service.home.articleList()
	ctx.body = {
		msg:'成功',
		code:200,
		succress:true,
		result:list
	}
  }
}

module.exports = HomeController;
