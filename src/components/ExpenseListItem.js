import React from 'React'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h5>{description}</h5>
        </Link>
        
        <p>{amount} - {createdAt}</p>
        
    </div>
)


export default ExpenseListItem