<template>
  <div class="thanks-wrapper">
    <div class="thanks-container">
      <h5>ご注文ありがとうございました</h5>
      <NuxtLink to="/">ホームへ戻る</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style scoped>
.thanks-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  max-width: 650px;
  width: 100%;
}
.thanks-container {
  height: ;
  width: 90%;
  padding: 20px;
  text-align: center;
  background-color: white;
}
h5 {
  font-size: 30px;
  margin: 50px 0;
}
a {
  display: inline-block;
  margin: 20px 0;
  padding: 10px;
  font-size: 30px;
  border-radius: 5px;
  color: white;
  background-color: firebrick;
}
</style>
