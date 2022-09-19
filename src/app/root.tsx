import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {articleProgressSlice, ProgressState} from "../feature/articleProgressSlice";


export interface RootStates {
    articleProgress: ProgressState
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
                articleProgress:articleProgressSlice.reducer
            });
            return combinedReducer(state, action);
        }
    }
};

export type RootState = ReturnType<typeof rootReducer>