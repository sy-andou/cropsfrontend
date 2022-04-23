<template>
  <div class="index-wrapper">
    <div class="main-container">
      <img
        v-bind:src="'https://cropsbacket.s3.ap-northeast-3.amazonaws.com/crops2.jpeg'"
        class="index-img"
      />
      <h2>Fresh<br />Vegetable & Fruit</h2>
    </div>
    <div>
      <h3>農作物一覧</h3>
    </div>
    <div class="item-list-wrapper">
      <div
        v-for="itemList in getSliceItemLists"
        v-bind:key="itemList.id"
        class="item-wrapper"
      >
        <Item v-bind:item-list="itemList" />
      </div>
    </div>
    <div class="paginate-container">
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
    getSliceItemLists() {
      this.paginate.pageCount = this.$store.state.items.itemLists.length;
      let end = this.paginate.currentPage * this.paginate.parPage;
      let start = end - this.paginate.parPage;
      return this.$store.state.items.itemLists.slice(start, end);
    },
    getPageCount: function () {
      return Math.ceil(
        this.$store.state.items.itemLists.length / this.paginate.parPage
      );
    },
  },
  created() {
    this.$store.dispatch("items/getItemLists");
  },
  mounted() {},
};
</script>
<style scoped>
.index-wrapper {
}
.main-container {
  position: relative;
}
.index-img {
  height: auto;
  width: auto;
  margin: 0 auto;
}
h2 {
  position: absolute;
  top: 30%;
  right: 0;
  padding: 20px;
  font-size: 100px;
  color: deeppink;
  font-family: Comic Sans MS;
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
.item-list-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.paginate-container {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 0 0;
}
@media screen and (max-width: 500px) {
  .index-img {
    width: 70%;
  }
  h2 {
    font-size: 30px;
  }
  .item-list-wrapper {
    flex-direction: column;
    margin: 10px auto;
  }
  h3:before,
  h3:after {
    width: 26%;
  }
}
</style>
