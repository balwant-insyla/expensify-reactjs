import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
const store = configureStore()


store.dispatch(addExpense({description: 'water bill', amount: 6700, createdAt: 7907 }))
store.dispatch(addExpense({description: 'gas bill', amount: 10000, createdAt: 139477 }))
store.dispatch(addExpense({description: 'rent', amount: 1890000, createdAt: 27047 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))