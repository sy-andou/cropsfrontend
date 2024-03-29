export const state=()=>({
  itemLists: [],
  itemList:{},
})

export const mutations = {
  setItemLists(state, itemLists) {
    state.itemLists = itemLists;
  },
  setItemList(state, itemList) {
    state.itemList = itemList;
  }
}
export const actions = {
  async getItemLists({commit}) {
    const itemData = await this.$axios.get("https://cropsbackend.herokuapp.com/api/item");
    const itemLists = itemData.data.item;
    commit("setItemLists", itemLists);
  },
  async getItemList({commit},{itemId}) {
    const itemData = await this.$axios.get("https://cropsbackend.herokuapp.com/api/item/"+itemId);
    const itemList = itemData.data.item;
    commit("setItemList", itemList);
    },
}
export const getters = {
  getItemList:(state)=>()=> {
    return;
  }
}