const { createStore , combineReducers } = Redux

// Action creators
const createPolicy = (name,policyAmount) => {
    return {
        type:'CREATE_POLICY',
        payload:{
            name: name,
            cash: policyAmount
        }
    }
}

const createClaim = (name,amountToClaim) => {
    return {
        type:'CREATE_CLAIM',
        payload:{
            name: name,
            cash: amountToClaim
        }
    }
}

const deletePolicy = (name) => {
    return {
        type:'DELETE_POLICY',
        payload:{
            name:name
        }
    }
}


// Reducers quivalent of Departments in insurance example
const  claimsHistory = (oldListofClaims =[], action) => {
    if(action.type === 'CREATE_CLAIM'){
        return [...oldListofClaims,action.payload.name] //this destructuring of old object into new object is necessary because redux compares old and new state through this and updates the stores accordingly.
    } 
    return oldListofClaims
}

const policyData = (oldPolicyList =[], action) => {
    if(action.type === 'CREATE_POLICY'){
        return [...oldPolicyList,action.payload.name]
    }else if(action.type === 'DELETE_POLICY'){
        return oldPolicyList.filter(policyHolder => policyHolder !== action.payload.name)
    }
    return oldPolicyList
}   

const accountsData = (accountBalance = 100, action) => {
    if(action.type === 'CREATE_POLICY'){
        return accountBalance + action.payload.cash
    }else if(action.type === 'CREATE_CLAIM'){
        return accountBalance - action.payload.cash
    }
    return accountBalance
}   

const rootReducer = combineReducers({
        accountsData:accountsData,
        policyData:policyData,
        claimsHistory:claimsHistory
    })

const store = createStore(rootReducer)

store.dispatch(createPolicy("Alexa",20))
store.dispatch(deletePolicy("Alexa"))
store.dispatch(createPolicy("suresh",20))

console.log(store.getState())