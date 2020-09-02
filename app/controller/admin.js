'use strict';
const Controller = require('egg').Controller;

class AdminController extends Controller{
	async index(){
		const { ctx } = this;
		const user = await this.app.mysql.get('users', { id: 1 });
		console.log(user)
		ctx.body = 'index';
	}
	async list(){
		const { ctx } = this
		ctx.body = 'list';
	}
	async edit(){
		const { ctx } = this
		ctx.body = 'edit';
	}
	async add(){
		const { ctx } = this
		ctx.body = 'add';
	}
	async delate(){
		const { ctx } = this
		ctx.body = 'delate';
	}
}