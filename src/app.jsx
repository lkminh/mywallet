import React from 'react'
import style from './css.scss'

export default class App extends React.Component {
    render() {
        return (
            <div className={style.example}>
                <h1>My Wallet</h1>
                <h2 className={style.globalClass}>Test</h2>
            </div>
        )
    }
}

