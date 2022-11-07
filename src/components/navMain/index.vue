<template>
  <ul class="main-page">
    <li class="list-item" v-for="(item, index) in list" :key="index">
      <div class="list-item-left">
        <input type="checkbox" v-model="item.finished" />
        <span class="ml-10">{{ item.description }}</span>
      </div>

      <button class="danger" @click="delTodo(index)">删 除</button>
    </li>
  </ul>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, ctx) {
    let delTodo = (index) => ctx.emit("delTodo", { index });
    return { delTodo };
  },
});
</script>

<style scoped lang="scss">
@import "@/common/style.scss";
@import "./index.scss";
</style>
