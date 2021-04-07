import { createStore }  from 'redux'


const incrementCount = ({incrementBy = 1} ={}) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy = 1} ={}) => ({
    type: 'DECREMENT',
    decrementBy
})
const resetCount = () => ({
    type: 'RESET'
})
const setCount = ({ count }) =>({
    type: 'SET',
    count
})

//Reducers

const countReducer = (state = { count: 0}, action) => {
    
    
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy 
            }
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
                return {
                    count: state.count - decrementBy 
                }
            case 'RESET':
                    return {
                        count: 0 
                    }
            case 'SET':
                    return {
                        count: action.count
                    }
        default:
            return state
    }
}
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementCount({ incrementBy: 6 }))
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount())

store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 2 }))

store.dispatch(setCount({count: 90}))

//console.log(store.getState())