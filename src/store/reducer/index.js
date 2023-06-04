import { combineReducers } from "redux";
import { postsReducer } from "./getAllPosts";

const rootReducer = combineReducers({postsReducer})

export default rootReducer