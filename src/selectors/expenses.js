//Get visible expenses
import moment from 'moment'

export default (expenses, { text, startDate, endDate, sortBy}) => {
    return expenses.filter((expense) => {
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        //const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate
        const creartedAtMoment = moment(expense.createdAt)
        const startDateMatch   = startDate ? startDate.isSameOrBefore(creartedAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(creartedAtMoment, 'day') : true
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