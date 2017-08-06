import React from 'react'
import TransactionCard from './components/TransactionCard'
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <TransactionCard date={TRANSACTION.date} transactions={TRANSACTION.transactions}/>
            </div>
        )
    }
}

var date = new Date().getTime()
var TRANSACTION = {
    date: date++,
    transactions: [{
        date: date++,
        category: "Food",
        note: "Đi nhậu",
        amount: 100000
    },{
        date: date++,
        category: "Food",
        note: "Đi nhà hàng",
        amount: 200000
    },{
        date: date++,
        category: "Cafe",
        note: "",
        amount: 15000
    }]
}