import React, { Component } from "react"
import './index.css'



class EmojiCard extends Component {
    render() {
        const { emojiDetails, isClicked } = this.props;
        const { emojiName, emojiUrl } = emojiDetails
        const clickedEmoji = () => {
            isClicked(emojiName)
        }
        return (
            <li className="emoji-item">
                <img className="emoji" src={emojiUrl} alt={emojiName} onClick={clickedEmoji} />
            </li>
        )
    }
}

export default EmojiCard