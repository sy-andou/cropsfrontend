<template>
  <div class="login-wrapper">
    <LoginForm />
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
.login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 650px;
}
@media screen and (max-width: 650px) {
  .login-wrapper {
    transform: translateY(-50%) translateX(-50%);
    width: 100%;
  }
}
</style>
