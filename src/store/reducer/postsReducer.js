import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../constants'

const initial = {
  posts: [],
  loading: false,
  error: null
}

export const postsReducer = (state = initial, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case LOAD_POSTS: {
      return {
        ...state,
        loading: true
      }
    };
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