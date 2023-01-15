import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import movieSlice from "./movie";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.type;
    default: {
      const combineReducer = combineReducers({
        movie: movieSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
