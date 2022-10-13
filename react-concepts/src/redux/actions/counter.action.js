import { counterType } from "../types/counter.type"

//This is function can be called as Action Creator as it returns the action when executed.
export const counterIncrement = (num) => {
    return {
        type: counterType.increment,
        payload: num
    }
}

export const counterDecrement = (num) => {
    return {
        type: counterType.decrement,
        payload: num
    }
}
