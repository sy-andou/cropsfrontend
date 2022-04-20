<template>
  <div class="layout-container">
    <div class="header-wrapper">
      <Header />
    </div>
    <div class="pages-wrapper">
      <Nuxt />
    </div>
    <div class="footer-wrapper">
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  method: {},
};
</script>
<style>
html,
body {
  height: 100%;
  background-color: rgb(233, 233, 233);
}
.layout-container {
  min-height: 100vh;
  position: relative;
}
.header-wrapper {
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: olivedrab;
  box-shadow: 1px 1px 2px gray;
}
.pages-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 100px 0 50px 0;
}
.footer-wrapper {
  position: absolute;
  bottom: 0;
}
a {
  font-color: black;
  text-decoration: none;
}
input {
  cursor: pointer;
}
.paginate-container {
  display: flex;
  margin: 0 0 50px 0;
  width: auto;
}
.pagination {
  display: inline-block;
  align-items: center;
  padding-left: 0;
  margin: 20px auto;
  border-radius: 4px;
  list-style: none;
  text-align: center;
}
.page-item,
.prev,
.next {
  display: inline;
}
.page-link,
.prev-link,
.next-link {
  margin-left: 0;
  color: #777;
  background-color: #fff;
  border-color: #ddd;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  text-decoration: none;
  border: 1px solid #ddd;
}
.prev-link {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.next-link {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.prev {
}
.prev-link {
}
.next {
}
.next-link {
}
.disabled > a:hover,
.active > a:hover {
  cursor: not-allowed;
}
.active > a {
  background-color: rgba(0, 108, 255, 0.5);
}
</style>
