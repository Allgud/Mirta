import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../constants'

export const loadPosts = () => {
  return {type: LOAD_POSTS}
}

export const setPosts = (payload) => {
  return {
    type: LOAD_POSTS_SUCCESS,
    payload
  }
}

export const setPostsError = (payload) => {
  return {
    type: LOAD_POSTS_FAILURE,
    payload
  }
}