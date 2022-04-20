export const state=()=>({
  cartLists: [],
})
export const mutations = {
  changeItemNumber( state , { cartId, orderNumber }) {
    state.cartLists.find((cartList) => {
      return cartList.cartId === cartId;
    }).orderNumber=orderNumber;
  },
  setItemNumber(state,cartLists) {
    state.cartLists = cartLists;
  },
  addCart(state,item) {
    state.cartLists.push(item);
  },
  resetCart(state) {
    state.cartLists = [];
  },
}
export const actions = {
}
export const getters = {
  getSumCartListPrice:(state)=>(cartId)=> {
    const cartList = state.cartLists.find((cartList) => {
      return cartList.cartId === cartId;
    });
    return cartList.itemList.price * cartList.orderNumber;
  },
  getSumCartListsPrice (state)  {
    let sumPrice = 0;
    state.cartLists.forEach((cartList) => {
      sumPrice = sumPrice + cartList.itemList.price*cartList.orderNumber;
    });
    return sumPrice;
  }
}