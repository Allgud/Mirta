import { SET_USERS_FAILURE, SET_USERS_SUCCESS, SET_CURRENT_USER, GET_CURRENT_USER_POSTS, SET_CURRENT_USER_POSTS } from '../constants'

const initial = {
  users: [],
  loading: false,
  error: null,
  currentUser: null,
  currentUserPosts: []
}

export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      }
    }
    case SET_USERS_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: state.users.find(el => el.id === action.payload)
      }
    }
    case GET_CURRENT_USER_POSTS: {
      return {
        ...state,
        loading: true
      }
    }
    case SET_CURRENT_USER_POSTS: {
      return {
        ...state,
        loading: false,
        currentUserPosts: action.payload
      }
    }
    default: return state;
  }
}