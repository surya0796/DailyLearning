import { counterType } from "../types/counter.type"

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
