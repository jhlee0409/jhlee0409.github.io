import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { articleProgressSlice } from "@/feature/articleProgressSlice";
import { ProgressState, ThemeState } from "@/types/index";
import { changeThemeSlice } from "@/feature/changeThemeSlice";

export interface RootStates {
  articleProgress: ProgressState;
  isDarkTheme: ThemeState;
}

export const rootReducer = (
  state: RootStates,
  action: AnyAction
): CombinedState<RootStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        articleProgress: articleProgressSlice.reducer,
        isDarkTheme: changeThemeSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
