import { LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, SET_USERS_FAILURE, SET_USERS_SUCCESS, SET_CURRENT_USER } from '../constants'

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

export const setUsers = (payload) => {
  return {
    type: SET_USERS_SUCCESS,
    payload
  }
}

export const setUsersError = (payload) => {
  return {
    type: SET_USERS_FAILURE,
    payload
  }
}

export const setCurrentUser = (payload) => {
  return {
    type: SET_CURRENT_USER,
    payload
  }
}