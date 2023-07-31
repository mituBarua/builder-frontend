// import { createSlice } from '@reduxjs/toolkit';
// import { HYDRATE } from 'next-redux-wrapper';

// const initialState = {
//   value: [
//     {
//       comment: 'Gojo looks nice. Excellent work amigo!',
//       username: 'Saitama',
//     },
//     {
//       comment: 'Catoru Sensei! Konnichiwa!',
//       username: 'Yuji',
//     },
//   ],
// };

// export const categorySlice = createSlice({
//   name: 'category',
//   initialState,
//   reducers: {
//     // Action to add comment
//     categoryAdded: (state, action) => {
//       state.value = [...state.value, action.payload];
//     },

   
//   },
// });

// export const { categoryAdded } = categorySlice.actions;
// export const selectComments = (state) => state.comments.value;
// export default categorySlice.reducer;