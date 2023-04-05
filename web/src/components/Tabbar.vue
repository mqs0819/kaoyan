<template>
  <div>
    <!-- 导航下边框 -->
    <van-tabbar v-model="active" route replace safe-area-inset-bottom>
      <van-tabbar-item badge="3" to="">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">专业院校</van-tabbar-item>
      <van-tabbar-item icon="setting-o">学习</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
};
</script>

<style>
</style>