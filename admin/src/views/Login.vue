<template>
  <div class="J_container">
    <div class="login">
      <div class="card">
        <div class="J_title">
          <h2>考研信息服务平台（后台管理）</h2>
        </div>
        <div id="owl" class="owl">
          <div class="eyes"></div>
          <div class="arm-up-right"></div>
          <div class="arm-up-left"></div>
          <div class="arm-down-left"></div>
          <div class="arm-down-right"></div>
        </div>
        <div class="content">
          <div class="item">
            <img class="icon" src="../assets/images/account.png" alt="" />
            <input type="text" placeholder="账号" v-model="model.username" />
          </div>
          <div class="item">
            <img class="icon" src="../assets/images/pwd.png" alt="" />
            <input
              type="password"
              placeholder="密码"
              v-model="model.password"
              @click="onFucus()"
              @blur="onBlur()"
            />
          </div>
          <div class="item">
            <img class="icon" src="../assets/images/code.png" alt="" />
            <input type="text" placeholder="验证码" v-model="model.code" />
            <!-- 接受后端验证码，渲染验证码图片 -->
            <!-- <img class="code" src="../assets/images/number.png" alt="" /> -->
            <span class="code" v-html="codeSvg" @click="fetchCaptcha"></span>
          </div>
          <div class="item">
            <el-button @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      model: {},
      codeSvg: "",
    };
  },
  methods: {
    onFucus() {
      let owl = document.getElementById("owl");
      owl.classList.add("owl-close");
    },
    onBlur() {
      let owl = document.getElementById("owl");
      owl.classList.remove("owl-close");
    },

    // 发送用户信息验证
    async login() {
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登录成功！",
      });
    },
    async fetchCaptcha() {
      const res = await this.$http.get("getCaptcha");
      this.codeSvg = res.data;
      console.log(res.data);
    },
  },
  created() {
    // this.fetchCaptcha()
  },
};
</script>

<style lang="css" scoped>
/* .J_container {
	height: 100%;
  background-image: url(../assets/images/login-background.jpg);
	background-size: cover;
} */
.J_title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>