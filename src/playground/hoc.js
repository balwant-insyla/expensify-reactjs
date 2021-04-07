// Higher Order Component (HOC) - A component (HOC) that render another component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p>Info details: {props.info}</p>
    </div>
)

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, for admin only</p>}
            <WrapperComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <WrapperComponent {...props} />
                    ) : (
                            <p>Please login to view the info</p>
                        )
            }
            
        </div>
    )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
//ReactDOM.render(<AdminInfo isAdmin={false} info="I am admin" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="I am admin" />, document.getElementById('app'))