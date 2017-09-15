import React from 'react'
import classNames from 'classnames'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Button, Navbar, Nav, NavItem } from 'reactstrap'
import styles from './home.scss'
import TransactionCard from './components/TransactionCard'
import AddTransactionDialog from './components/AddTransaction/AddTransactionDialog'
const STORAGE_KEY = "walletdata"
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            transactions: this.loadTransactions(),
            isOpenAddTransactionDialog: false
        }
        this.openAddTransactionDialog = this.openAddTransactionDialog.bind(this)
        this.closeAddTransactionDialog = this.closeAddTransactionDialog.bind(this)
        this.handleAddTransaction = this.handleAddTransaction.bind(this)
    }
    openAddTransactionDialog() {
        this.setState({isOpenAddTransactionDialog: true})
    }
    closeAddTransactionDialog() {
        this.setState({isOpenAddTransactionDialog: false})
    }
    loadTransactions() {
        let savedValue = localStorage.getItem(STORAGE_KEY)
        if (savedValue && savedValue.length > 0) {
            return JSON.parse(savedValue)
        }
        return {}
    }
    saveTransactions(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
    handleAddTransaction(transaction) {
        let transactionGroupByDate = Object.assign({}, this.state.transactions)
        let date = transaction.date
        let key = this.generateKeyFromDate(date)
        let newTransactionObj = {
            date: date,
            category: transaction.category,
            amount: transaction.amount,
            note: transaction.note
        }

        let transactionDay = transactionGroupByDate[key]
        if (transactionDay == null) {
            transactionDay = {
                date: date,
                transactions: []
            }
        }
        let newTransactionDay = {
            date: transactionDay.date,
            transactions: [...transactionDay.transactions, newTransactionObj]
        }

        let newStateTransactions = Object.assign({}, transactionGroupByDate)
        newStateTransactions[key] = newTransactionDay
        this.setState({transactions: newStateTransactions})
        this.saveTransactions(newStateTransactions)

    }
    render() {

        return (
            <div className={styles.homeScreen}>
                <Navbar cssModule={bootstrap}>
                    <Nav className="ml-auto" navbar cssModule={bootstrap}>
                        <NavItem cssModule={bootstrap}>
                            {<Button color="primary" cssModule={bootstrap} onClick={this.openAddTransactionDialog}>Add</Button>}
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className={classNames(styles.transactionCardList)}>
                    {
                        Object.values(this.state.transactions).reverse().map((transaction) =>
                            <TransactionCard
                                externalClassName={styles.transactionCard}
                                date={transaction.date}
                                transactions={transaction.transactions}
                                key={transaction.date}/>)
                    }
                </div>
                <AddTransactionDialog
                    isOpen={this.state.isOpenAddTransactionDialog}
                    onRequestClose={this.closeAddTransactionDialog}
                    onAddTransaction={this.handleAddTransaction}
                />
            </div>
        )
    }
    generateKeyFromDate(date) {
        let dateObj = date instanceof Date ? date : new Date(date)
        dateObj.setHours(0,0,0,0)
        return dateObj.getTime()
    }
}

