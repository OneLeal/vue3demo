<template>
  <div class="nav-footer">
    <p class="info">{{ `已完成 ${finishNum} / 全部 ${list.length}` }}</p>

    <button v-if="finishNum" class="btn-ghost" @click="resetTodo">清 除</button>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, ctx) {
    let finishNum = computed(() => {
      const temp = props.list.filter((item) => item.finished) || [];
      return temp.length;
    });
    let resetTodo = () => ctx.emit("resetTodo");
    return { finishNum, resetTodo };
  },
});
</script>

<style scoped lang="scss">
@import "@/common/style.scss";
@import "./index.scss";
</style>
