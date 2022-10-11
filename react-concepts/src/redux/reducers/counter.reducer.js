// Reducers always take two arguments; first as previous state and second as action contains the updatation in state.
const counterReducer = (count = 0,action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return count + action.payload
        case 'DECREMENT' :
            return count - action.payload
        default : 
            return count
    }
}

export default counterReducer