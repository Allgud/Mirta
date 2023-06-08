import { LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, SET_CURRENT_PAGE, SORT_FROM_BEGIN, SORT_FROM_END, SORT_BY_DEFAULT } from '../constants'
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
    case SORT_FROM_BEGIN: {
      const sorted = [...state.posts].sort((a, b) => a.title.localeCompare(b.title))
      return {
        ...state,
        postsView: createPostPagination(sorted)
      }
    }
    case SORT_FROM_END: {
      const sorted = [...state.posts].sort((a, b) => b.title.localeCompare(a.title))
      return {
        ...state,
        postsView: createPostPagination(sorted)
      }
    }
    case SORT_BY_DEFAULT: {
      return {
        ...state,
        postsView: createPostPagination(state.posts)
      }
    }
    default: return state
  }

}