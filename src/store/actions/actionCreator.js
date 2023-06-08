import {
  LOAD_POSTS_SUCCESS, 
  LOAD_POSTS_FAILURE, 
  SET_USERS_FAILURE, 
  SET_USERS_SUCCESS, 
  SET_CURRENT_USER, 
  GET_CURRENT_USER_POSTS,
  GET_COMMENTS,
  SET_COMMENTS,
  SET_CURRENT_PAGE,
  SET_CURRENT_USER_POSTS,
  SORT_FROM_BEGIN,
  SORT_FROM_END,
  SORT_BY_DEFAULT
} from '../constants'

export const setPosts = (payload) => ({
  type: LOAD_POSTS_SUCCESS,
  payload
})

export const setPostsError = (payload) => ({
  type: LOAD_POSTS_FAILURE,
  payload
})

export const getCurrentUserPosts = (payload) => ({
  type: GET_CURRENT_USER_POSTS,
  payload
})

export const setCurrentUserPosts = (payload) => ({
  type: SET_CURRENT_USER_POSTS,
  payload 
})

export const setUsers = (payload) => ({
  type: SET_USERS_SUCCESS,
  payload
})

export const setUsersError = (payload) => ({
  type: SET_USERS_FAILURE,
  payload
})

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload 
})

export const getComments = (payload) => ({
  type: GET_COMMENTS,
  payload
})

export const setComments = (payload) => ({
  type: SET_COMMENTS,
  payload
})

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload
})

export const sortFromBegin = () => ({
  type: SORT_FROM_BEGIN
})

export const sortFromEnd = () => ({
  type: SORT_FROM_END
})

export const defaultSort = () => ({
  type: SORT_BY_DEFAULT
})