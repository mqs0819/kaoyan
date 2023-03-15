// 引入框架并创建实例
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

app.use(express.json())

let corsOptions = {
	// origin: 'http://xxxx.xxx'
}
// 允许跨域
app.use(require('cors')(corsOptions))

// 开启body内容解析
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())
// 配置session
app.use(session({
	secret: 'keyboard cat_m',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false
	}
}))

// 挂载路由
require('./plugins/db')(app)
require('./routes/admin/index')(app)

// 监听端口
app.listen(5000, function () {
	console.log(`http://localhost:5000`);
})