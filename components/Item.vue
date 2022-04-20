<template>
  <div class="item-container">
    <img
      v-bind:src="itemList.img_pass"
      v-on:click="transitionItemDetailPage(itemList.id)"
      class="item-img"
    />
    <div class="item-text">
      <h5 v-on:click="transitionItemDetailPage(itemList.id)" class="item-name">
        {{ itemList.name }}
      </h5>
      <p class="item-price">
        <span>¥</span>{{ itemList.price }}<span>税込</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["itemList"],
  data() {
    return {};
  },
  methods: {
    transitionItemDetailPage(id) {
      this.$router.push({ name: "detail-itemId", params: { itemId: id } });
    },
  },
  computed: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.item-container {
  width: 300px;
  margin: 10px;
  box-shadow: 1px 1px 2px gray;
}
.item-img {
  height: 200px;
  width: 100%;
  cursor: pointer;
}
.item-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}
.item-name,
.item-price {
  display: inline-block;
  padding: 5px 10px;
}
.item-name {
  font-size: 20px;
  cursor: pointer;
}
</style>
