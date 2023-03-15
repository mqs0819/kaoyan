const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const schema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	password: {
		type: String,
		select: false, // 密码在查询是可见
		set(val) {
			return bcrypt.hashSync(val, 10)
		},
		require: true
	},
	createdata: {
		type: Date
	}
}, {
	// 时间戳
	timestamps: true
})

module.exports = mongoose.model('AdminUser', schema)