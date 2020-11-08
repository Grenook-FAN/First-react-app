import { LOGIN_TOGGLE } from "./actions"

const initialState = {
    isLogined:false
}

export function rootReducer(state=initialState, action){
    if (action.type === LOGIN_TOGGLE){
        return {
            ...state, isLogined:!state.isLogined 
        }
    }
    return state
}