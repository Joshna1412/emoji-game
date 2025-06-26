import React, { Component } from 'react'
import './index.css'

class WinCard extends Component {
    render() {
        const { score, startedAgain } = this.props
        const start = () => {
            startedAgain(score)
        }
        return (
            <div className='won-card-container'>
                <div>
                    <h1>You Won</h1>
                    <h3>Score</h3>
                    <h1 className='score-reveal'>{score}/12</h1>
                    <button className='play-again' onClick={start}>Play Again</button>
                </div>
                <div>
                    <img className='won-emoji' src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" alt="won-emoji" />
                </div>

            </div>
        )
    }
}

export default WinCard