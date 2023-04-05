<template>
  <div>
    <div>
      <van-nav-bar
        title="北京大学"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="specialty p-2">
      <van-list>
        <van-cell is-link center clickable>
          <van-row>
            <van-col span="5" class="text-grey">院系所 </van-col>
            <van-col span="19">(012)管理学院</van-col>
          </van-row>
          <van-row>
            <van-col span="5" class="text-grey">专业</van-col>
            <van-col span="19">(025300)(专业学位)税务</van-col>
          </van-row>
          <van-row>
            <van-col span="5" class="text-grey">研究方向</van-col>
            <van-col span="19">(025300)(专业学位)税务</van-col>
          </van-row>
          <div class="tag-con mt-2">
            <van-tag color="#FFF5EE" text-color="#FB9148"> 统考 </van-tag>
            <van-tag color="#FFF5EE" text-color="#FB9148"> 全日制 </van-tag>
          </div>
					<!-- <van-icon name="arrow" ></van-icon> -->
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    methods: {
      onClickLeft() {
        Toast("返回");
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.specialty {
	.tag-con {

	}
}
</style>