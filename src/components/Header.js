import React from "react"
import Troll from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={Troll} alt="" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Presented by Arya</h4>
        </header>
    )
}