import { useState } from "react"

function Content () {
    return (
        <h2>Content</h2>
    )
}

function Customize () {
    return (
        <h2>Customize</h2>
    )
}
export default function InfoSection () {
    const [info, changeInfo] = useState(<Content />);
    return (
        <h1 onClick={() => changeInfo(<Customize />)}>{info}</h1>
    )
}
