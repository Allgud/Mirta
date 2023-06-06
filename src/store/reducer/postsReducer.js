import { LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, SET_CURRENT_PAGE } from '../constants'
import { createPostPagination } from '../helpers'

const initial = {
  posts: [],
  loading: true,
  error: null,
  postsView: {},
  currentPage: 1
}

export const postsReducer = (state = initial, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload,
        postsView: createPostPagination(action.payload)
      }
    }
    case LOAD_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    default: return state
  }

}