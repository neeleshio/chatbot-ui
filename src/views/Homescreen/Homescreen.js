import React from 'react'
import './Homescreen.css'
import Chatbox from '../Chatbox/Chatbox'

function Homescreen() {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div id="homescreen">
            <div className="project-info">
                <h1 className="welcome">WELCOME</h1>
                <h3>This project has been deployed on Vercel</h3>
                <div className="buttons">
                    <button className="view">View on Github</button>
                    <button className="download">Download folder</button>
                </div>
            </div>

            <div className="chat-box">
                {open && <Chatbox handleClose={handleOpen} />}
            </div>
            <div className="chat-button">
                <button onClick={handleOpen}>
                    <img src="./chat.png" alt="chat-icon" />
                </button>
            </div>

            <h2 className="footer-text">CHATBOT UI <img src="./chat.png" width="25px" height="25px" /></h2>

        </div>
    )
}

export default Homescreen
