import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import { ProgressState } from "@/types/index";

const initialState: ProgressState = {
  value: 0,
};

export const articleProgressSlice = createSlice({
  name: "postProgressSlice",
  initialState,
  reducers: {
    checkProgress: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { checkProgress } = articleProgressSlice.actions;
export const selectCount = (state: RootState) => state;

export default articleProgressSlice.reducer;
