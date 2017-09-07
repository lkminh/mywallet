import React from 'react'
import 'typeface-roboto'
import classNames from 'classnames'

import styles from './home.scss'
import TransactionCard from './components/TransactionCard'
export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.homeScreen}>
                <h1>Home</h1>
                <div className={classNames(styles.transactionCardList)}>
                    {
                        TRANSACTIONS.map((transaction) =>
                            <TransactionCard
                                externalClassName={styles.transactionCard}
                                date={transaction.date}
                                transactions={transaction.transactions}
                                key={transaction.date}/>)
                    }
                </div>

            </div>
        )
    }
}

var date = new Date().getTime()
var TRANSACTION1 = {
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

date += 24 * 60 * 60 * 1000;
var TRANSACTION2 = {
    date: date++,
    transactions: [{
        date: date++,
        category: "Food",
        note: "Ăn xế bánh mì",
        amount: 20000
    },{
        date: date++,
        category: "Petro",
        amount: 65000
    },{
        date: date++,
        category: "",
        note: "",
        amount: 15000
    },{
        date: date++,
        category: "Parking Fees",
        note: "Gửi xe",
        amount: 1000
    }]
}
var TRANSACTIONS = [TRANSACTION1, TRANSACTION2]
