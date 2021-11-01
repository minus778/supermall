<template>
  <div id="home">
    <home-nav-bar />
    <home-swiper :banners="banners" />
    <home-views :recommends="recommends" />
    <home-three />
    <tab-contral :title="title" />
    <goods-list :goods="goods.pop.good" />
  </div>
</template>

<script>
import HomeNavBar from "./childcomp/HomeNavBar.vue";
import HomeSwiper from "./childcomp/HomeSwiper.vue";
import HomeViews from "./childcomp/HomeViews.vue";
import HomeThree from "./childcomp/HomeThree.vue";

import TabContral from "components/content/tabContral/TabContral.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeViews,
    HomeThree,
    TabContral,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, good: [] },
        new: { page: 0, good: [] },
        sell: { page: 0, good: [] },
      },
    };
  },
  created() {
    //首页组件被创建时就调用请求函数
    //1、获取轮播图及其下面四个块的数据
    this.getHomeMultidata();
    //2、获取首页商品信息
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].page++;
        this.goods[type].good.push(...res.data.list);
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  padding-bottom: 55px;
}
</style>
