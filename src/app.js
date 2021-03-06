import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore()



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
let hasRendered = false
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
}).catch((e)=>{
    console.log('Error ', e)
})

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('uid', user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            } 
        }).catch((e)=>{
            console.log('Error ', e)
        })
    } else {
        store.dispatch(logout())
        renderApp()
        console.log('log out');
       history.push('/')
    }
})