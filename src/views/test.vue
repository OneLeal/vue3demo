<template>
  <div>
    <p>{{ hello }}</p>
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: "Hello World!",
      obj: { name: "浅色星河" },
    };
  },
  created() {
    console.log("created");
    this.obj.age = 20;
  },
  mounted() {
    console.log("mounted");
    this.$nextTick(() => setTimeout(() => (this.obj.age = 26), 2500));
  },
};
</script>

<style></style>
