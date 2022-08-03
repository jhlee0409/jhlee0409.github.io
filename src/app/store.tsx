import { configureStore, Reducer } from "@reduxjs/toolkit";
import { rootReducer, RootStates } from "./root";
import { AnyAction, CombinedState } from "redux";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
    reducer: rootReducer as Reducer<CombinedState<RootStates>, AnyAction>,
    devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const storeWrapper = createWrapper(() => store);
