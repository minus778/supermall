<template>
  <div class="recommend">
    <div v-for="(item, id) in recommends" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeViews",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend div {
  flex: 1;
  font-size: 12px;
}
.recommend img {
  width: 65px;
  margin-bottom: 10px;
}
</style>