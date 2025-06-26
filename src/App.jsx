import React, { Component } from 'react'
import Header from './component/Header'
import './App.css'
import EmojiCard from './component/EmojiCard'
import LossCard from './component/LossCard'
import WinCard from './component/WinCard'
const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojisList: emojisList,
    emojiText: '',
    won: false,
    gameOver: false,
    clickedList: []
  }
  emojiClicked = (text) => {
    const { clickedList, score } = this.state
    clickedList.forEach(each => {
      if (each === text) {
        this.setState({ gameOver: true })
        if (score === 12) {
          this.setState({ won: true })
        }
        else {
          this.setState({ won: false })
        }
      }
    }
    )
    this.setState({ clickedList: [...clickedList, text] })
    this.setState((prevState) => ({ score: prevState.score + 1 }))
  }

  startAgain = scoreValue => {
    this.setState({ clickedList: [] })
    this.setState({ gameOver: false })
    this.setState({ won: false })
    this.setState({ topScore: scoreValue })
    this.setState({ score: 0 })
  }

  render() {
    const { emojisList, score, topScore, gameOver, won } = this.state
    const shuffledEmojisList = () => {
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return (
      <div className='container'>
        <Header score={score} topScore={topScore} />
        {
          gameOver ? (won ? <WinCard score={score} startedAgain={this.startAgain} /> : <LossCard score={score} startedAgain={this.startAgain} />) :
            <ul className='emojis-container'>
              {shuffledEmojisList().map(each =>
                <EmojiCard key={each.id} emojiDetails={each} isClicked={this.emojiClicked} />
              )}
            </ul>
        }
      </div>
    )
  }
}

export default App