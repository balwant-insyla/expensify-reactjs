import {createStore, combineReducers} from 'redux'
import {v4 as uuidv4} from 'uuid'

//Add Expoense

const addExpense = ({description='', note='', amount=0, createdAt=0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})   

//Remove Expense

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//Edit Expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_Text_Filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense)
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            //console.log(action.expense.id)
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
  
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBY: 'date'
            }
            case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy: 'amount'
                }
            case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.date
                }
            case 'SET_END_DATE':
                    return {
                        ...state,
                        endDate: action.date
                    }
        default:
            return state
    }
}
const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

//Get visible expenses
const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1
        }
    })
}   
store.subscribe(() => {
    //console.log(store.getState())
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch((addExpense({ description: 'rent', amount: 100, createdAt: 677 })))
const expenseTwo = store.dispatch((addExpense({ description: 'icecream', amount: 100, createdAt: 6 })))

// console.log(expenseOne.expense.id )

//store.dispatch(removeExpense({ id: expenseTwo.expense.id }))
//store.dispatch(editExpense(expenseOne.expense.id, {amount: 500 }))


 store.dispatch(setTextFilter('ice'))
// store.dispatch(setTextFilter())


// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(2234))
//store.dispatch(setStartDate(5))

//store.dispatch(setEndDate(599))
// store.dispatch(setEndDate())

const demoState = {
    expenses: [{
        id: 'sdhjkjd',
        description: 'room rent',
        note: 'This is reminder note',
        amount: 6000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}