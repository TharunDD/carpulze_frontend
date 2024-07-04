import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Check if role exists in localStorage, if not set it to 0
const initialRole = localStorage.getItem('role') ? JSON.parse(localStorage.getItem('role')) : 0;

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  role: initialRole, // Use initialRole instead of hardcoding 0
  // Retrieve isAuthenticated from localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromcart(state, action) {
      const itemIdToRemove = action.payload.product_id;
      state.Cartitems = state.Cartitems.filter(
        (cartItem) => cartItem.product_id !== itemIdToRemove
      );
      localStorage.setItem('Cartitems', JSON.stringify(state.Cartitems));
      toast.error(`This item is removed from cart`, {
        position: 'top-center',
      });
    },
    clearFromcart(state, action) {
      state.Cartitems = [];
      localStorage.setItem('Cartitems', JSON.stringify(state.Cartitems));
      toast.error(`All items were removed from the cart`, {
        position: 'top-center',
      });
    },
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      // Save user and isAuthenticated to localStorage
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('isAuthenticated', 'true');
    },
    srole(state, action){
      state.role = action.payload;
      localStorage.setItem('role', JSON.stringify(action.payload));
    },
    logout(state,action) {
      console.log("JOIend");
      state.user = null;
      state.isAuthenticated = false;
      state.role = 0;
      // Remove user and isAuthenticated from localStorage
      localStorage.removeItem('user');
      localStorage.setItem('isAuthenticated', 'false');
    },
  },
});

export const {
  srole,
  removeFromcart,
  clearFromcart,
  login,
  logout,
  decreaseCart,
  inCart,
  gettotal 
} = cartSlice.actions;
export default cartSlice.reducer;
