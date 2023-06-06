import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { userReducer } from './userReducer'
import { commentReducer } from './commentsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
  comments: commentReducer
})

export default rootReducer