import React from 'react'
import './Chatbox.css'
import { questions } from './questions'

function Chatbox({ handleClose }) {
    return (
        <div id="chatbox">
            <div className="chatbox-wrapper">
                <div className="chatbox-top">
                    <h1>IRIS</h1>
                    <h2>Hello 👋</h2>
                    <div className="chatbox-intro">
                        <p>I am Iris, a Virtual Assistant</p>
                        <p>How may I help you today?</p>
                    </div>
                </div>
                <div className="faq-wrapper">
                    <div className="bot-img">
                        <img src="./bot.svg" alt="bot" />
                    </div>
                    <div className="faq-lists">
                        <h2>Frequently Asked Questions</h2>
                        <ul>
                            {Object.values(questions).map((question, key) => (
                                <li key={key}><span>⦿</span>{question.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="start-btn">
                        <button><img src="./speech.svg" alt="speech ballon" /> <p>Start a New Conversation</p></button>
                    </div>
                </div>
                <button className="close-btn" onClick={handleClose}>close</button>
            </div>
        </div>
    )
}

export default Chatbox
