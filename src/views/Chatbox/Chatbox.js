import React, { useState, useEffect } from 'react'
import './Chatbox.css'
import { questions } from './questions'

function Chatbox({ handleClose }) {
    const [list, setList] = useState([])
    const [ques, setQues] = useState(0)
    const [faq, setFaq] = useState(false)
    const [startBtn, setStartBtn] = useState(false)

    useEffect(() => {
        if (faq && ques < questions.length) {
            setQues(prev => prev + 1)
            setTimeout(() => {
                setList([...list, questions[ques]['title']])
            }, 1500)
        } else if (ques === questions.length) {
            setStartBtn(true)
        }
    }, [list, faq])

    useEffect(() => {
        setTimeout(() => {
            setFaq(true)
        }, 2000);
    }, [])

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
                    <div className="intro-bot-img">
                        <img src="./bot.svg" alt="bot" />
                    </div>
                </div>
                <div className="faq-wrapper">
                    <div className="bot-img">
                        <img src="./bot.svg" alt="bot" />
                    </div>
                    <div className="faq-lists">
                        <h2>Frequently Asked Questions</h2>
                        {faq && (
                            <ul>
                                {list.length > 0 && list.map((question, key) => (
                                    <li key={key}>
                                        <span>⦿</span>
                                        {question}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {startBtn && (
                        <div className="start-btn">
                            <button><img src="./speech.svg" alt="speech ballon" /> <p>Start a New Conversation</p></button>
                        </div>
                    )}
                </div>
                <button className="close-btn" onClick={handleClose}>close</button>
            </div>
        </div>
    )
}

export default Chatbox
