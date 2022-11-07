<template>
  <div class="home-page">
    <navHeader :list="list" @addTodo="addTodo" />
    <navMain :list="list" @delTodo="delTodo" />
    <navFooter :list="list" @resetTodo="resetTodo" />
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import navHeader from "@/components/navHeader";
import navMain from "@/components/navMain";
import navFooter from "@/components/navFooter";

export default defineComponent({
  name: "Home",
  props: {},
  components: { navMain, navHeader, navFooter },
  setup(props, ctx) {
    let store = useStore();
    let list = computed(() => store.getters.getList);

    // 添加任务
    let addTodo = ({ message }) => {
      store.commit("ADD_TODO", { description: message, finished: false });
    };

    // 删除任务
    let delTodo = (index) => {
      store.commit("DEL_TODO", index);
    };

    // 清除已完成任务
    let resetTodo = () => {
      const arr = list.value.filter((item) => !item.finished);
      store.commit("RESET_TODO", arr);
    };

    return { addTodo, delTodo, resetTodo, list };
  },
});
</script>

<style scoped lang="scss">
.home-page {
  padding: 20px;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px;
}
</style>
