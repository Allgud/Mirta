import { LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../constants'

const initial = {
  posts: [],
  loading: true,
  error: null
}

export const postsReducer = (state = initial, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS: {

      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    }
    case LOAD_POSTS_FAILURE: {

      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default: return state
  }

}