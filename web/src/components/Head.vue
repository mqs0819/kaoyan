<template>
  <div class="navbar">
    <div>
      <img
        src="https://t1.chei.com.cn/yz/wap/assets/images/index/logo.png"
        alt="logo"
      />
    </div>
    <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "导航", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
    };
  },
};
</script>

<style>
</style>