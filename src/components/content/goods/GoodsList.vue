<template>
  <div class="goods">
    <goods-list-item
      v-for="(good, index) in goods"
      :key="index"
      :gooditem="good"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      defualt() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-around;
}
</style>