/**
 * Created by minhluong on 8/6/17.
 */
import React from 'react'
import TransactionItem from './transactionItem.js'

export default class TransactionCard extends React.Component {
    render() {
        const date = new Date(this.props.date)
        const dayInNumber = date.getDate()
        const dayInString = getDay(date.getDay())
        const month = getMonth(date.getMonth())
        const monthAndYear = `${month} ${date.getYear()}`

        return (
            <div className="transactionCard">
                <div className="transactionHeader">
                    <span className="day">{dayInNumber}</span>
                    <span className="date">
                        <span className="days">{dayInString}</span>
                        <span className="months">{monthAndYear}</span>
                    </span>
                </div>
                <div className="transactionList">
                    {
                        this.props.transactions.map((transaction) => {
                            return (
                                <TransactionItem
                                    key = {transaction.date}
                                    category={transaction.category}
                                    note={transaction.note}
                                    amount={transaction.amount}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const getDay = (date) => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][date]
const getMonth = (month) => [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
][month]

