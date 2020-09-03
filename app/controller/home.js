'use strict';

const Controller = require('egg').Controller;
/**
* @controller 首页。
*/
class HomeController extends Controller {

  
  /** 秒杀列表
    * @summary 查询秒杀列表。
    * @description 查询秒杀列表。
    * @router get /minapp/seckill/list （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
    * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
    */
   async seckillList() {
    const { ctx } = this;
    const list = await ctx.service.home.seckillList()
    this.JsonBody(list)
  }

  async index() {
    const { ctx } = this;
    const user = await ctx.service.home.index();
    var data = await this.ctx.curl('http://ah.annoroad.com:50002/annoroad-report-currency/openApi/annoroadGuanware/find?idcard=530302199111100914&mobile=17301398562');
	  console.log(user);
    ctx.body = data;
  }
  
  //商品搜索
  async serch() {
    const { ctx } = this;
    const list = await ctx.service.home.serch()
    ctx.body = {
      msg:'成功',
      code:200,
      succress:true,
      result:list
    }
  }

  //热门商品
  async hot() {
    const { ctx } = this;
    const list = await ctx.service.home.serch()
    ctx.body = {
      msg:'成功',
      code:200,
      succress:true,
      result:list
    }
  }

  //商品头部分类
  async kind() {
    const { ctx } = this;
    const list = await ctx.service.home.kind()
    ctx.body = {
      msg:'成功',
      code:200,
      succress:true,
      result:list
    }
  }


  //商品详情
  async goodDetail() {
    const { ctx } = this;
    const list = await ctx.service.home.goodDetail()
    ctx.body = {
      msg:'成功',
      code:200,
      succress:true,
      result:list
    }
  }

  /*
  * 对返回的数据结果进行封装。
  */
  JsonBody (data) {
    this.ctx.body = {
        succress:true,
        msg:'请求成功',
        results: data
    };
  }
}

module.exports = HomeController;
