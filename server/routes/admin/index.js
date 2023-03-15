module.exports = app => {
	const expess = require('express')
	const jwt = require('jsonwebtoken')
	const bcrypt = require('bcryptjs')
	const assert = require('http-assert')

	const router = expess.Router({
		mergeParams: true
	})

	router.get('/', (req, res) => {

	})

	// 路由挂载
	app.use('/admin/api/rest/:resource', router)

	// 登录
	const AdminUser = require('../../models/AdminUser')
	let captchaOptions = {
		size: 4,
		noise: 6,
		ignoreChars:"0o1i",
		// background: "pink"
	}
	// 获取验证码
	app.get('/admin/api/getCaptcha', (req, res) => {
		let captcha = require('svg-captcha').create(captchaOptions)
		res.type('svg')
		req.session.captcha = captcha.text
		res.status(200).send(captcha.data)
	})
	app.post('/admin/api/login', async (req, res, next) => {
		const { username, password, code } = req.body
		// 0. 验证码比对
		console.log(req.session);
		if (code !== req.session.captcha) { 
			return res.status(422).send({ msg: '验证码错误' })
		}

		// 1.校验账号
		const user = await AdminUser.findOne({ username }).select('+password')
		if (!user) {
			return res.status(422).send({ msg: '账号不存在' })
		}
		// 2.密码验证
		const isValid = bcrypt.compareSync(password, user.password)
		if (!isValid) {
			return res.status(422).send({ msg: '密码错误' })
		}
		// 3. 签发token令牌
		const token = jwt.sign({ id: user._id }, '#2248909&', { expiresIn: '2h' })

		return res.status(200).send(token)
	})
}
