'use strict'

const Controller = require('egg').Controller
class WxController extends Controller{
    async login(){
        const { ctx,config } = this;
        var data = await this.ctx.curl('https://api.weixin.qq.com/sns/jscode2session?=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',{
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data: {
                appid: config.wechat_config.APPID,
                secret:config.wechat_config.SECRET,
                js_code: Date.now(),
                grant_type:'authorization_code'
            },
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
        });
        ctx.body = data;
    }
}