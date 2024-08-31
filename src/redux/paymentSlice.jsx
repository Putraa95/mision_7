import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogContent } from "../services/api"; // Pastikan path API sudah benar

// Thunk untuk mengambil data pembayaran dari API
export const fetchBlogContent = createAsyncThunk(
  "payment/fetchBlogContent",
  async () => {
    const data = await getBlogContent();
    return data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentData: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setPaymentMethod(state, action) {
      state.activeMethod = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogContent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentData = action.payload;
      })
      .addCase(fetchBlogContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions dan selector
export const { setPaymentMethod } = paymentSlice.actions;
export const selectPaymentMethod = (state) => state.payment.activeMethod;
export const selectPaymentData = (state) => state.payment.paymentData;
export const selectPaymentStatus = (state) => state.payment.status;
export const selectPaymentError = (state) => state.payment.error;

export default paymentSlice.reducer;
