<template>
  <div class="detail-container">
    <div class="item-detail-container">
      <img v-bind:src="$store.state.items.itemList.img_pass" class="item-img" />
      <div class="item-detail-data">
        <h5>{{ $store.state.items.itemList.title }}</h5>
        <p>{{ $store.state.items.itemList.detail }}</p>
      </div>
    </div>
    <div class="detail-menu">
      <h5>{{ $store.state.items.itemList.name }}</h5>
      <p class="item-price">¥{{ $store.state.items.itemList.price }}(税込)</p>
      <form v-on:submit.prevent="addCart">
        <select v-model="orderNumber">
          <option disabled value="">個数を選択してください</option>
          <option
            v-for="number in $store.state.items.itemList.number"
            v-bind:value="number"
          >
            {{ number }}
          </option>
        </select>
        <input type="submit" value="カートに入れる" class="order-btn" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderNumber: "",
    };
  },
  methods: {
    addCart() {
      const item = {
        cartId: this.$store.state.cart.cartLists.length + 1,
        itemList: this.$store.state.items.itemList,
        orderNumber: this.orderNumber,
      };
      this.$store.commit("cart/addCart", item);
      this.$router.push("/cart");
    },
  },
  computed: {},
  created() {
    this.$store.dispatch("items/getItemList", {
      itemId: this.$route.params.itemId,
    });
  },
  mounted() {},
};
</script>
<style scoped>
.detail-container {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  margin: 50px 10px;
}
.item-detail-container {
}
.item-detail-data {
  margin: 10px 0;
}
.item-img {
  height: auto;
  width: 600px;
  box-shadow: 1px 1px 2px gray;
}
h5 {
  margin: 10px 0;
  font-size: 30px;
}
.detail-menu {
  margin: 0 30px;
}
.item-price {
  margin: 10px 0;
  font-size: 40px;
  font-weight: bold;
}
select {
  height: 42px;
  border: none;
}
.order-btn {
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  background-color: firebrick;
}
</style>
