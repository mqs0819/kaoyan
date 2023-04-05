<template>
  <div>
    <div class="kz-head">
      <van-sticky>
        <van-row class="p-3">
          <van-col span="5" class="mt-3">
            <div class="fs-xl text-bold">226天</div>
            <div class="fs-xxs text-grey">距2024考研</div>
          </van-col>
          <van-col span="16">
            <van-search v-model="value" placeholder="请输入搜索关键词" />
          </van-col>
          <van-col span="3" class="mt-2 pl-2">
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </van-col>
        </van-row>
      </van-sticky>
    </div>
    <!-- 首部导航结束 -->
    <div class="kz-swipe m-3">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image
            src="https://t1.chei.com.cn/yz/wap/assets/images/index/swiper/6.jpg"
            alt="login"
          ></van-image>
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            src="https://t1.chei.com.cn/yz/wap/assets/images/index/swiper/3.jpg"
          ></van-image>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图结束 -->
    <div class="kz-grid">
      <van-grid column-num="5">
        <van-grid-item v-for="(item, index) in nav_icon" :key="index">
          <img :src="item.imgUrl" alt="" class="kz-ten-icon" />
          <div>{{ item.title }}</div>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 导航分类模块结束 -->
    <div class="news">
      <div class="hot-news-bl d-flex">
        <div class="yz-img-bl">
          <img src="../assets/images/tbtj/hot-news.png" class="w-100" alt="" />
        </div>
        <div class="news-list-swp ml-4 pl-2">
          <van-swipe
            style="height: 3rem"
            vertical
            :show-indicators="false"
            autoplay="3000"
          >
            <van-swipe-item>
              <div class="msg">
                <a href="">2023年全国硕士研究生调剂注意事项</a>
                <a href="">2023考研初试成绩查询时间汇总</a>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="msg">
                <a href=""
                  >教育部关于印发《2023年全国硕士研究生招生工作管理规定》的通知</a
                >
                <a href="">教育部部署2023年全国硕士研究生招生复试录取工作</a>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <!-- 热点新闻模块结束 -->
    <div class="z-index-box p-3">
      <h3>特别推荐</h3>
      <div class="kyfl-box">
        <div class="kyfl-list">
          <div class="kyfl-item">
            <a href="">
              <img
                src="https://t4.chei.com.cn/news/img/2260379803.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="kyfl-item">
            <a href="">
              <img
                src="https://t4.chei.com.cn/news/img/2260379803.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="kyfl-item">
            <a href="">
              <img
                src="https://t4.chei.com.cn/news/img/2260379803.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="kyfl-list">
          <div class="kyfl-item">
            <a href="">
              <img
                src="https://t3.chei.com.cn/news/img/2216230235.png"
                alt=""
              />
            </a>
          </div>
          <div class="kyfl-item">
            <a href="">
              <img
                src="https://t3.chei.com.cn/news/img/2216230235.png"
                alt=""
              />
            </a>
          </div>
          <div class="kyfl-item">
            <a href="">
              <img
                src="https://t3.chei.com.cn/news/img/2216230235.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 特别推荐结束 -->
    <div class="pl-3 pr-3">
      <h3>新手指南</h3>
      <div class="guide p-4">
        <div v-for="(item, index) in guide_item" :key="index">
          <div class="guide-item w-100 text-ellipsis">
            <span class="warm fs-xl">{{ index + 1 }}</span> {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      nav_icon: [
        {
          imgUrl: require("../assets/images/tbtj/bsml.png"),
          title: "硕士目录",
        },
        {
          imgUrl: require("../assets/images/tbtj/cjcx.png"),
          title: "博士目录",
        },
        { imgUrl: require("../assets/images/tbtj/ssml.png"), title: "院校库" },
        {
          imgUrl: require("../assets/images/tbtj/tkwb.png"),
          title: "在线咨询",
        },
        {
          imgUrl: require("../assets/images/tbtj/wbgg.png"),
          title: "网报公告",
        },
        {
          imgUrl: require("../assets/images/tbtj/wsqr.png"),
          title: "统考网报",
        },
        {
          imgUrl: require("../assets/images/tbtj/wstj.png"),
          title: "网上确认",
        },
        {
          imgUrl: require("../assets/images/tbtj/ycms.png"),
          title: "成绩查询",
        },
        {
          imgUrl: require("../assets/images/tbtj/yxk.png"),
          title: "远程面试",
        },
        {
          imgUrl: require("../assets/images/tbtj/zxzx.png"),
          title: "网上调剂",
        },
      ],
      guide_item: [
        {
          title:
            "调剂干货|这10种情况，考研er要注意调剂干货|这10种情况，考研er要注意",
          url: "",
        },
        { title: "调剂干货|这10种情况，考研er要注意", url: "" },
        { title: "调剂干货|这10种情况，考研er要注意", url: "" },
        {
          title:
            "调剂干货|这10种情况，考研er要注意调剂干货|这10种情况，考研er要注意",
          url: "",
        },
        {
          title:
            "调剂干货|这10种情况，考研er要注意调剂干货|这10种情况，考研er要注意",
          url: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.kz-head {
  .van-sticky {
    background-color: #fff;
  }
}
.my-swipe {
  border-radius: 2rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  // font-size: 20px;
  line-height: 1rem;
  text-align: center;
  // background-color: #39a9ed;
}

.kz-ten-icon {
  width: 2.6rem;
}

.news {
  margin: 1rem 1rem 0 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  .hot-news-bl {
    height: 3rem;
    .yz-img-bl {
      width: 3rem;
    }
  }
}

.hot-news-bl .yz-img-bl:after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 2.907rem;
  background: #dcdada;
  position: absolute;
  right: 22.707rem;
  top: 66%;
  margin-top: -0.453rem;
}

.msg {
  width: 20rem;
  a {
    display: block;
    padding: 0.2rem 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.kyfl-box {
  overflow-x: auto;
}
.kyfl-list {
  justify-content: space-between;
  white-space: nowrap;
  .kyfl-item {
    width: 1rem;
    position: relative;
    margin-right: 12rem;
    margin-bottom: 0.3rem;
    display: inline-block;
    a {
      display: inline-block;
      width: 100%;
      img {
        width: 12rem;
        border-radius: 0.4rem;
      }
    }
  }
}

.guide {
  height: 12rem;
	border-radius: .4rem;
  background: linear-gradient(#dae9fe, #fff);
  .guide-item {
    line-height: 2rem;
		.warm {
			color: #DB9460;
		}
  }
}
</style>