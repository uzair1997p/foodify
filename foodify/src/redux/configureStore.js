import { createStore, combineReducers, applyMiddleware } from "redux";
import { Comments } from "./comment";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      leaders: Leaders,
      promotions: Promotions,
      comments: Comments,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
