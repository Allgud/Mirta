import { GET_COMMENTS, SET_COMMENTS } from '../constants'

const initial = {
  comments: [],
  loading: false,
  id: null
}

export const commentReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_COMMENTS: {
      return {
        ...state,
        loading: true,
        id: action.payload
      }
    }
    case SET_COMMENTS: {
      return {
        ...state,
        loading: false,
        comments: action.payload
      }
    }
    default: return state
  }
}