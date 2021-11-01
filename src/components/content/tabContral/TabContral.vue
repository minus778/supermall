<template>
  <div class="tab-contral">
    <div
      v-for="(item, index) in title"
      :key="index"
      :class="{ checked: index == isindex }"
    >
      <span @click="ischecked(index)">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContral",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isindex: 0,
    };
  },
  methods: {
    ischecked(index) {
      this.isindex = index;
    },
  },
};
</script>

<style>
.tab-contral {
  display: flex;
  position: sticky;
  top: 44px;
  height: 35px;
  padding-top: 7px;
  z-index: 9;
  background-color: white;
}
.tab-contral div {
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.tab-contral div span {
  padding-bottom: 3px;
}
.checked {
  color: pink;
}
.checked span {
  border-bottom: 2px solid pink;
}
</style>