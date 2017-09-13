import React from 'react'
import classNames from 'classnames'
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, NavItem } from 'reactstrap';
import styles from './home.scss'
import TransactionCard from './components/TransactionCard'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {transactions: sampleData()}
    }
    render() {
        return (
            <div className={styles.homeScreen}>
                <Navbar cssModule={bootstrap}>
                    <Nav className="ml-auto" navbar cssModule={bootstrap}>
                        <NavItem cssModule={bootstrap}>
                            {<Button color="primary" cssModule={bootstrap}>Add</Button>}
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className={classNames(styles.transactionCardList)}>
                    {
                        this.state.transactions.map((transaction) =>
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
const sampleData = function() {
    let storedValue = localStorage.getItem('data')

    if (storedValue) {
        return JSON.parse(storedValue)
    } else {
        var date = new Date().getTime()
        let transactionData = [{
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
        }, {
            date: date+= 24 * 60 * 60 * 1000,
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
        }]
        localStorage.setItem('data', JSON.stringify(transactionData))
        return transactionData
    }
}

