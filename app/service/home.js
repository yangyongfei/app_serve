const Service = require('egg').Service;

class HomeService extends Service {
	constructor(ctx){
		super(ctx); // 调用父对象上的函数。
		// this.dataSeckill =  this.ctx.model['seckill'];
	}
	async index() {
		const user = this.app.mysql.get('user', { id: 1 });
		return user;
	}
	async list() {
		const user = this.app.mysql.select('user');
		return user;
	}
	async add(user) {
		const status = await this.app.mysql.insert('user', user);
		return status;
	}
	async edit() {
		const user = this.app.mysql.update('user', { id: 1 });
		return user;
	}
	async delate() {
		const user = this.app.mysql.delete('user', { id: 1 });
		return user;
	}

	async search(name) {
		const list = this.app.mysql.get('goods', {name:name} )
		return list
	}

	async kind() {
		const list = this.app.mysql.select('article')
		return list
	}

	async goodDetail() {
		const list = this.app.mysql.select('article')
		return list
	}

	async seckillList() {
		const list = this.app.mysql.select('seckill')
		return list
	}

}

module.exports = HomeService;