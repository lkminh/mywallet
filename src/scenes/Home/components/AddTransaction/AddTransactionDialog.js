/**
 * Created by minhluong on 9/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Button, Input, FormGroup } from 'reactstrap'
import styles from './addTransactionDialog.scss'

export default class AddTransactionDialog extends React.Component {
    constructor() {
        super()
        this.state = {
            category: '',
            amount: '',
            note: ''
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleAddButtonClick() {
        if (this.props.onAddTransaction) {
            this.props.onAddTransaction({
                category: this.state.category,
                amount: this.state.amount,
                note: this.state.note,
                date: new Date().getTime()
            })
        }

        if (this.props.onRequestClose) {
            this.props.onRequestClose()
            this.setState({
                category: '',
                amount: '',
                note: ''
            })
        }
    }
    handleCloseButtonClick() {
        if (this.props.onRequestClose) {
            this.props.onRequestClose()
        }
    }
    handleInputChange(event) {
        const name = event.target.getAttribute("name")
        const value = event.target.value
        const state = {}
        state[name] = value
        this.setState(state)
    }
    render() {
        const {contentLabel, ...others} = this.props
        return (
            <Modal style={{overlay: {backgroundColor   : 'rgba(0, 0, 0, 0.75)'}}}
                   className={{base: styles.modalContent}}
                   contentLabel="Add Transaction"
                   shouldCloseOnOverlayClick={false}
                   {...others}>
                <h2>Add Transaction</h2>
                <div className="content">
                    <FormGroup cssModule={bootstrap}>
                        <Input name="category" value={this.state.category} placeholder="Category" onChange={this.handleInputChange} autoFocus cssModule={bootstrap}/>
                    </FormGroup>
                    <FormGroup cssModule={bootstrap}>
                        <Input name="amount" value={this.state.amount} type="number" placeholder="How much?" onChange={this.handleInputChange} cssModule={bootstrap}/>
                    </FormGroup>
                    <FormGroup cssModule={bootstrap}>
                        <Input name="note" value={this.state.note} placeholder="Note" onChange={this.handleInputChange} cssModule={bootstrap}/>
                    </FormGroup>
                </div>
                <div className="actionButtons">
                    <Button color="secondary" cssModule={bootstrap} onClick={this.handleCloseButtonClick}>Cancel</Button>
                    {' '}
                    <Button color="primary" cssModule={bootstrap} onClick={this.handleAddButtonClick}>Add</Button>
                </div>
            </Modal>
        )
    }
}

AddTransactionDialog.propTypes = {
    onAddTransaction: PropTypes.func.isRequired
}