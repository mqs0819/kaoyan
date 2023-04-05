<template>
  <div class="master-container">
    <div class="header-banner p-3">
      <h1>2023硕士专业目录查询</h1>
      <div class="tip">可查询当年硕士招生专业的考试范围</div>
    </div>
    <div class="select-list">
      <p class="pl-3 text-grey">学科类别为必填项，其他至少填写一项。</p>
      <div v-for="(item, index) in 5" :key="index">
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="所在省市"
          placeholder="选择省市"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            active-color="#1787E0"
            :show-header="false"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </div>
      <van-button class="mt-4 w-100" type="primary" @click="onSubmit" url="/master/category" >
        <h3>查 询</h3>
      </van-button>
    </div>
    <div class="footer p-4 mt-4 text-grey">
      <p>作者邮箱：iceorangewine@gmail.com</p>
      <p>源码地址：https://github.com/mqs0819/kaoyan</p>
      <p>Copyright © 2023 考研服务平台</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
      console.log(this.cascaderValue);
    },
    onSubmit() {
      console.log(this.options);
    },
  },
};
</script>

<style lang="scss" scoped>
.master-container {
  background-color: #f5f5f5;
}
.header-banner {
  padding-bottom: 4rem;
  text-align: center;
  color: #ffffff;
  background-color: #2b93e8;
  .tip {
    color: #d6eafa;
  }
}

.select-list {
  position: relative;
  top: -2rem;
  border-radius: 0.4rem;
  margin: 0 1rem;
  padding: 1rem;
  background-color: #ffffff;
}

.footer {
  background-color: #282828;
}
</style>