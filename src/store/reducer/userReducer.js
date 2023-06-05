import { SET_USERS_FAILURE, SET_USERS_SUCCESS, SET_CURRENT_USER } from '../constants'

const initial = {
  users: [],
  error: null,
  currentUser: null
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
    default: return state;
  }
}