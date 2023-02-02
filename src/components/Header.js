import React from "react";

export default function Header(props) {
    return (
        <header>

            <input onChange={props.handleColor} type="color" id="user-color"></input>

            <select className="color-select" onChange={props.handleMode}>
                <option value="monochrome">Monochrome</option>
                <option value="monochrome-dark">Monochrome-dark</option>
                <option value="monochrome-light">Monochrome-light</option>
                <option value="analogic">Analogic</option>
                <option value="analogic-complement">Analogic-complement</option>
                <option value="triad">Triad</option>
                <option value="quad">Quad</option>
            </select>

        <button className="get-btn" onClick={props.getData}>Get color scheme</button>

        </header>
    )
}