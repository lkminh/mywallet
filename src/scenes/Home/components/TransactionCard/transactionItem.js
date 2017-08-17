/**
 * Created by minhluong on 8/6/17.
 */
import React from 'react'
import classnames from 'classnames'
import styles from './transactionItem.scss'

const TransactionItem = (props) => (
    <div className={classnames(styles.transactionItem, props.externalClassName)}>
        <div>{props.category}</div>
        <div>{props.note}</div>
        <div>{props.amount}</div>
    </div>
)
export default TransactionItem
