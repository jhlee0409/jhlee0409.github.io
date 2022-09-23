import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import { ThemeState } from "@/types/index";

const initialState: ThemeState = {
  value: true,
};

export const changeThemeSlice = createSlice({
  name: "changeThemeSlice",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeTheme } = changeThemeSlice.actions;

export default changeThemeSlice.reducer;
