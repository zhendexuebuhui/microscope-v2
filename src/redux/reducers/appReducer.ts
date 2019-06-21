import * as constants from '../actionTypes'
import { AppAction } from '../actions/appAction'
import { AppState } from '../states/appState'

const initialState: AppState = {
  toast: null,
  loading: null,
  modal: null,

  drawerOpen: false,
  appLanguage: navigator.language || 'en',
  globalTickTime: new Date().getTime()
}

export default function(state: AppState = initialState, action: AppAction) {
  switch (action.type) {
    case constants.TOAST:
      return {
        ...state,
        toast: {
          ...action.payload
        }
      }
    case constants.SHOW_LOADING:
      return {
        ...state,
        loading: action.data
      }
    case constants.HIDE_LOADING:
      return {
        ...state,
        loading: null
      }
    case constants.SHOW_MODAL:
      return {
        ...state,
        modal: action.data
      }
    case constants.HIDE_MODAL:
      return {
        ...state,
        modal: null
      }

    case constants.SWITCH_LANGUAGE:
      return {
        ...state,
        appLanguage: action.data
      }

    case constants.GLOBAL_TICKTIME:
      return {
        ...state,
        globalTickTime: action.data
      }
    default:
      return state
  }
}
