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

                </div>
                <div>
                    <img className='loss-emoji' src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" alt="loss-emoji" />
                </div>

            </div>
        )
    }
}

export default LossCard