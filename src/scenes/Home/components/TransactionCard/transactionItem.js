/**
 * Created by minhluong on 8/6/17.
 */
import React from 'react'
import classnames from 'classnames'
import styles from './transactionItem.scss'
import imgUrl from "../../../../../assets/images/categoryIcon"

const TransactionItem = (props) => {
    return (
        <div className={classnames(styles.transactionItem, props.externalClassName)}>
            <img className={styles.categoryImage} src={ imgUrl.icon_12 }/>
            <div>{props.category}</div>
            <div>{props.note}</div>
            <div>{props.amount}</div>
        </div>
    )
}
export default TransactionItem
