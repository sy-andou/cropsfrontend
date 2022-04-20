export const state=()=>({
  orderedLists: [],
})
export const mutations = {
  setOrderedLists(state, orderedLists) {
    state.orderedLists = orderedLists;
  },
}
export const actions = {
  async getOrderedLists({commit}) {
    const orderedData = await this.$axios.get("https://cropsbackend.herokuapp.com/api/order");
    const orderedLists = orderedData.data.order;
    commit("setOrderedLists", orderedLists);
  },
}
export const getters = {
  getOrderedList:(state)=>(userId)=> {
    return state.orderedLists.filter((orderedList) => {
      return orderedList.user_id === userId;
    });
  }
}