import React, { useEffect } from 'react'
import './Homescreen.css'
import Chatbox from '../Chatbox/Chatbox'

function Homescreen() {
    const [open, setOpen] = React.useState(false)
    const [isClosed, setIsClosed] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const openLink = () => {
        window.open('https://chatbot-ui-react.vercel.app/', '_blank');
    }

    const downloadFolder = () => {
        //
    }

    return (
        <div id="homescreen">
            <div className="project-info">
                <h1 className="welcome">WELCOME</h1>
                <h3>This project has been deployed on Vercel</h3>
                <div className="buttons">
                    <button className="view" onClick={openLink}>View on Github</button>
                    <button className="download" onClick={downloadFolder}>Download folder</button>
                </div>
            </div>

            <div className="chat-box">
                {open && <Chatbox handleClose={handleOpen} open={open} />}
            </div>
            <div className="chat-button">
                <div className="tooltip">
                    Hi, how can I help you?
                </div>
                <button onClick={handleOpen}>
                    <img src="./chat.png" alt="chat-icon" />
                </button>
            </div>

            <h2 className="footer-text">CHATBOT UI <img src="./chat.png" width="15px" height="15px" /></h2>

        </div >
    )
}

export default Homescreen
