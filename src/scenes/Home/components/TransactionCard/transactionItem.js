/**
 * Created by minhluong on 8/6/17.
 */
import React from 'react'

const TransactionItem = (props) => (
    <div>
        <div>{props.category}</div>
        <div>{props.note}</div>
        <div>{props.amount}</div>
    </div>
)
export default TransactionItem