<template>
  <div class="gooditem">
    <img :src="gooditem.show.img" alt="" />
    <p>{{ gooditem.title }}</p>
    <span class="text-one">{{ gooditem.price }}</span>
    <span class="text-two">☆</span>
    <span class="text-three">{{ gooditem.cfav }}</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    gooditem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.gooditem {
  width: 48%;
}
.gooditem img {
  width: 100%;
  border-radius: 10px;
}
.gooditem p {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-one {
  color: pink;
  margin-left: 30px;
}
.text-two {
  margin-left: 15px;
  margin-right: 5px;
}
</style>