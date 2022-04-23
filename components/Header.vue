<template>
  <div class="header-container">
    <div class="title-container">
      <img
        src="/img/logo.png"
        v-on:click="modal = !modal"
        class="titele-icon"
      />
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
    <transition name="left">
      <div class="modal-window" v-show="modal">
        <div class="modal-bg">
          <ul v-if="!$auth.loggedIn">
            <li v-on:click="modal = false" class="home-link">
              <NuxtLink to="/">ホーム</NuxtLink>
            </li>
            <li v-on:click="modal = false" class="register-link">
              <NuxtLink to="/register">新規登録</NuxtLink>
            </li>
            <li v-on:click="modal = false" class="login-link">
              <NuxtLink to="/login">ログイン</NuxtLink>
            </li>
          </ul>
          <ul v-else>
            <li v-on:click="modal = false" class="cart-link">
              <NuxtLink to="/cart">カートの中身</NuxtLink>
            </li>
            <li v-on:click="modal = false" class="ordered-link">
              <NuxtLink to="/ordered">注文履歴</NuxtLink>
            </li>
            <li v-on:click="logout" class="login-link">
              <NuxtLink to="/login">ログアウト</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    async logout() {
      try {
        this.modal = false;
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
}
.titele-icon {
  width: 50px;
  padding: 10px;
  border-radius: 5px;
  background-color: firebrick;
  box-shadow: 1px 1px 2px maroon;
  z-index: 3;
  cursor: pointer;
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
.left-enter-active,
.left-leave-active {
  transform: translate(0px, 0px);
}
.left-enter,
.left-leave-to {
  transform: translateX(-100%);
}
.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 200px;
  height: 100%;
  background: white;
  transition: 0.3s;
}
.modal-bg {
  position: absolute;
  width: 100%;
  top: 30%;
  text-align: center;
}
li {
  list-style-type: none;
  width: 100%;
  margin: 50px auto;
  color: black;
}
@media screen and (max-width: 900px) {
  .titele-icon {
    width: 40px;
    padding: 5px;
  }
  h1 {
    font-size: 3em;
  }
  .header-menu {
    display: none;
  }
}
</style>
