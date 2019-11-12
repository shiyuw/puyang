import {postHttp} from "./httpService"
const url = "http://puyang.wengetech.com:9001";
const transform = (api) => url+api;
//登录接口
/**
 * 
 * @param {Object} data 传入参数
 * @param  {String} mobile  data 键值 手机号
 * @param {String} password data 键值 密码
 * @param {integer} appInfoId data 键值 appid
 * @return {Object} json
 */
export const login = data => postHttp(transform('/login/signIn'),data)

// 注册接口
/**
 * 
 * @param {Object} data 传入参数
 * @param {String} mobile 手机号
 * @param {integer} captcha 验证码
 * @param {integer} appInfoId appid
 * @param {String} password 密码
 * 
 */
export const register = data =>postHttp(transform('/login/register'),data)

// 获取验证码接口
/**
 * 
 * @param {Object} data 
 * @param {String} mobilePhone 获取验证码的手机号
 * @param {integer} auto_id 同app_info_id用于标识app
 * @param {integer} status 获取验证码的场景
 */
export const getSms = data =>postHttp(transform('/login/getSms'),data)
// 验证码登录接口
/**
 * 
 * @param {Object} data 
 * @param {String} mobilePhone 获取验证码的手机号
 * @param {integer} captcha 获取到的验证码
 * @param {integer} appInfoId 同app_info_id app标识
 */
export const checkCaptcha = data =>postHttp(transform('/login/checkCaptcha'),data)
// 更新密码接口
/**
 * 
 * @param {Object} data 
 * @param {String} mobilePhone 获取验证码的手机号
 * @param {integer} captcha 获取到的验证码
 * @param {integer} appInfoId 同app_info_id app标识
 */
export const updatePassword = data =>postHttp(transform('/login/updatePassword'),data)
