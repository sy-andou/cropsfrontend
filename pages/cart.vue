<template>
  <div class="cart-wrapper">
    <h3>ショッピングカート</h3>
    <div class="cart-container">
      <div v-if="$store.state.cart.cartLists.length">
        <div
          v-for="cartList in $store.state.cart.cartLists"
          v-bind:key="cartList.cartId"
          class="cartList-container"
        >
          <item v-bind:item-list="cartList.itemList" />
          <div class="cartList-menu">
            <span>購入数量</span>
            <select
              v-bind:value="cartList.orderNumber"
              v-on:change="changeItemNumber($event, cartList.cartId)"
            >
              <option v-for="number in cartList.itemList.number">
                {{ number }}
              </option>
            </select>
            <p>
              小計：{{
                $store.getters["cart/getSumCartListPrice"](cartList.cartId)
              }}(税込)
            </p>
          </div>
        </div>
      </div>
      <div　v-else>
        <p>カートは空です</p>
      </div>
      <div class="totalPrice-container">
        <p>合計：{{ $store.getters["cart/getSumCartListsPrice"] }}(税込)</p>
        <input type="submit" v-on:click="addOrder" value="注文する" />
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
    changeItemNumber(event, cartId) {
      this.$store.commit("cart/changeItemNumber", {
        cartId: cartId,
        orderNumber: event.target.value,
      });
    },
    async addOrder() {
      await this.$store.state.cart.cartLists.forEach((cartList) => {
        const sendData = {
          item_id: cartList.itemList.id,
          number: cartList.orderNumber,
          user_id: this.$auth.user.id,
        };
        this.$axios.post("http://127.0.0.1:8000/api/order", sendData);
      });
      this.$store.commit("cart/resetCart");
      this.$router.push("/thanks");
    },
  },
  computed: {
    cartData: {
      get() {
        return Array.from(this.$store.getters["cart/getCartLists"]);
      },
      set(cartLists) {
        this.$store.commit("cart/setItemNumber", cartLists);
      },
    },
  },
  created() {},
};
</script>
<style scoped>
.cart-container {
  display: grid;
  grid-template-columns: 50% 50%;
  width: auto;
}
h3 {
  position: relative;
  text-align: center;
  margin: 10px;
  padding: 0;
  font-size: 30px;
}
h3:before,
h3:after {
  content: "";
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 40%;
  height: 2px;
  background-color: black;
}
h3:before {
  left: 0;
}
h3:before {
  right: 0;
}
.cartList-container {
  display: flex;
  margin: 10px 0;
  background-color: white;
  box-shadow: 1px 1px 2px gray;
}
.cartList-menu {
  margin: 50px;
}
.cartList-menu > span {
  font-size: 20px;
}
.cartList-menu > p {
  margin: 30px 0;
  font-size: 20px;
}
select {
  height: 42px;
  font-size: 20px;
}
.totalPrice-container {
  position: fixed;
  top: 50%;
  right: -10%;
  transform: translateY(-50%) translateX(-50%);
  display: inline-block;
  padding: 20px 40px;
  background-color: white;
  box-shadow: 1px 1px 2px gray;
}
.totalPrice-container > p {
  margin: 30px auto;
  width: 100%;
  font-size: 40px;
}
.totalPrice-container > input {
  display: block;
  margin: 0 0 0 auto;
  padding: 10px 20px;
  border: none;
  font-size: 30px;
  border-radius: 5px;
  color: white;
  background-color: firebrick;
  box-shadow: 1px 1px 2px maroon;
}
</style>
