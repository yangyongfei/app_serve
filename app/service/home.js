const Service = require('egg').Service;

class HomeService extends Service { 
	 async index(){
		const user = this.app.mysql.get('user', { id: 1 });
		return user;
	 }
	 async list(){
	 		const user = this.app.mysql.select('user');
	 		return user;
	 }
	 async add(user){
	 		const status = await this.app.mysql.insert('user',user); 
	 		return status;
	 }
	 async edit(){
	 		const user = this.app.mysql.update('user', { id: 1 });
	 		return user;
	 }
	 async delate(){
	 		const user = this.app.mysql.delete('user', { id: 1 });
	 		return user;
	 }
	 
	 async articleList(){
		   const list = this.app.mysql.select('article')
		   return list
	 }
}

module.exports = HomeService;