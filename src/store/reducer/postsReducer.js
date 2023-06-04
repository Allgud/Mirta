import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from '../constants'

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
      const data = action.payload

      return {
        ...state,
        loading: false,
        posts: data
      }
    }
    default: return state
  }

}