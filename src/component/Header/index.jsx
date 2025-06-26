import React, { Component } from 'react'
import './index.css'

class Header extends Component {
    render() {
        const { score, topScore } = this.props
        return (
            <div className='header-container'>
                <div className='logo-container'>
                    <img className='logo' src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji-app-logo" />
                    <h3>Emoji Game</h3>
                </div>
                <h3 className='score-content'>Score: <span>{score}</span></h3>
                <h3 className='top-score-content'>Top Score: <span>{topScore}</span></h3>
            </div>
        )
    }
}

export default Header