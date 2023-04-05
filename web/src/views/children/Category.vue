<template>
  <div>
    <div>
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" />
    </div>
    <div class="nav-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item, index) in list" :key="index" url="/master/college">
          <div class="d-flex">
            <div class="flex-1">({{ item.id }}) {{ item.title }}</div>
            <div class="fs-xs text-grey">{{item.address}}</div>
          </div>
          <van-tag
            color="#EDF6FE"
            text-color="#2b93e8"
            v-for="n in item.tags"
            :key="n"
          >
            {{ n }}
          </van-tag>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "10001",
          title: "北京大学",
          tags: ["研究生院", "自主划线", "博士点"],
          address: "北京市",
        },
        {
          id: "10001",
          title: "北京大学",
          tags: ["研究生院", "自主划线", "博士点"],
          address: "北京市",
        },
        {
          id: "10001",
          title: "北京大学",
          tags: ["研究生院", "自主划线", "博士点"],
          address: "北京市",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.van-search__action {
  color: #2b93e8;
}

.nav-list {
  .van-tag {
    margin: 0 0.2rem;
  }
}
</style>