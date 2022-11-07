<template>
  <div class="header-page">
    <input
      type="text"
      placeholder="请输入任务"
      v-model="value"
      @keyup.enter="addTodo"
    />

    <button @click="addTodo">添 加</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navHeader",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, ctx) {
    let value = ref("");
    let addTodo = () => {
      const message = value.value;
      const flag = props.list.find((item) => item.description === message);

      if (flag) {
        alert("任务已存在！");
        return;
      }

      if (message) {
        ctx.emit("addTodo", { message });
        value.value = "";
      }
    };
    return { value, addTodo };
  },
});
</script>

<style scoped lang="scss">
@import "@/common/style.scss";
@import "./index.scss";
</style>
