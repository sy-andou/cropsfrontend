<template>
  <div class="header-container">
    <div class="title-container">
      <NuxtLink to="/"
        ><img src="/img/logo.png" class="titele-icon"
      /></NuxtLink>
      <NuxtLink to="/"><h1>Crops</h1></NuxtLink>
    </div>
    <div class="header-menu">
      <p class="login-user">
        ログインユーザー:<span v-if="!$auth.loggedIn">ゲスト</span
        ><span v-else>{{ $auth.user.name }}</span
        >様
      </p>
      <div v-if="!loginState">
        <NuxtLink to="/register" class="menu-btn">新規登録</NuxtLink>
        <NuxtLink to="/login" class="menu-btn">ログイン</NuxtLink>
      </div>
      <div v-else>
        <NuxtLink to="/cart"
          ><img src="/img/cart.png" class="menu-icon"
        /></NuxtLink>
        <NuxtLink to="/ordered"
          ><img src="/img/user.png" class="menu-icon"
        /></NuxtLink>
        <img v-on:click="logout" src="/img/logout.png" class="menu-icon" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    loginState() {
      if (this.$auth.loggedIn) {
        return true;
      } else {
        this.$store.commit("cart/resetCart");
        return false;
      }
    },
  },
  watch: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 95%;
  margin: 0 auto;
}
.title-container {
  display: flex;
  width: ;
}
.titele-icon {
  width: 50px;
  padding: 10px;
  border-radius: 5px;
  background-color: firebrick;
  box-shadow: 1px 1px 2px maroon;
}
h1 {
  margin: 0 0 0 20px;
  color: firebrick;
  font-size: 60px;
  font-family: Courier;
}
.login-user {
  margin: 0 50px;
}
.header-menu {
  display: flex;
  align-items: center;
}
.menu-btn {
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  background-color: firebrick;
  box-shadow: 1px 1px 2px maroon;
}
.menu-icon {
  width: 30px;
  margin: 0 10px;
  cursor: pointer;
}
</style>
