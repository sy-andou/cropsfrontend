<template>
  <div class="ordered-wrapper">
    <h3>注文履歴</h3>
    <div>
      <div
        v-for="orderedList in getSliceOrderedLists"
        v-bind:key="orderedList.id"
        class="ordered-container"
      >
        <item v-bind:item-list="orderedList.item" />
        <div class="ordered-data-wrapper">
          <div class="ordered-data-container">
            <p class="ordered-number">注文数：{{ orderedList.number }}個</p>
            <p class="ordered-date">注文日：{{ orderedList.created_at }}</p>
          </div>
          <NuxtLink
            v-bind:to="{
              name: 'detail-itemId',
              params: { itemId: orderedList.item.id },
            }"
            class="detail-router-btn"
            >もう一度購入する</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="pages-container">
      <paginate
        :page-count="getPageCount"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'＜'"
        :next-text="'＞'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-class="'prev'"
        :prev-link-class="'prev-link'"
        :next-class="'next'"
        :next-link-class="'next-link'"
      >
      </paginate>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paginate: {
        pageCount: "",
        currentPage: 1,
        parPage: 8,
      },
    };
  },
  methods: {
    clickCallback(pageNum) {
      this.paginate.currentPage = Number(pageNum);
    },
  },
  computed: {
    orderedGetters() {
      return this.$store.getters["ordered/getOrderedList"](this.$auth.user.id);
    },
    getSliceOrderedLists() {
      this.paginate.pageCount = this.orderedGetters.length;
      let end = this.paginate.currentPage * this.paginate.parPage;
      let start = end - this.paginate.parPage;
      return this.orderedGetters.slice(start, end);
    },
    getPageCount: function () {
      return Math.ceil(this.orderedGetters.length / this.paginate.parPage);
    },
  },
  created() {
    this.$store.dispatch("ordered/getOrderedLists");
  },
  mounted() {},
};
</script>
<style scoped>
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
  width: 44%;
  height: 2px;
  background-color: black;
}
h3:before {
  left: 0;
}
h3:before {
  right: 0;
}
.ordered-container {
  display: flex;
  margin: 10px;
  background-color: white;
  box-shadow: 1px 1px 2px gray;
}
.ordered-data-wrapper {
  position: relative;
  margin: 10px 30px;
}
.ordered-data-container {
}
.ordered-number,
.ordered-date {
  margin: 10px 0;
  font-size: 20px;
}
.pages-container {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding: 0 0 0 0;
}
.detail-router-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  background-color: firebrick;
}
@media screen and (max-width: 820px) {
  .ordered-container {
    flex-direction: column;
  }
  .ordered-data-wrapper {
    margin: 10px;
  }
  .detail-router-btn {
    position: static;
    display: inline-block;
    margin: 10px 0;
  }
}
</style>
