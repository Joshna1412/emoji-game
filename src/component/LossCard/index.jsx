import React, { Component } from 'react'
import './index.css'

class LossCard extends Component {
    render() {
        const { score, startedAgain } = this.props
        const start = () => {
            startedAgain(score)
        }
        return (
            <div className='loss-card-container'>
                <div>
                    <h1>You Lose</h1>
                    <h3>Score</h3>
                    <h1 className='score-reveal'>{score}/12</h1>
                    <button className='play-again' onClick={start}>Play Again</button>
                </div>
                <div>
                    <img className='loss-emoji' src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" alt="loss-emoji" />
                </div>

            </div>
        )
    }
}

export default LossCard