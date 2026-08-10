import React, {useState} from 'react'

export default function StateFunc() {
    let [text, setText] = useState('Hello World')
    let [size, setSize] = useState(16)

    const onClickSetText = () => {
        let t = prompt('Set Text')
        if (t) {
            setText(t)
        }
    }
    const onClickZoomIn = () => {
        let newSize = size + 1
        setSize(newSize)
    }
    let msgboxSyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgroundColor: '#ccc',
        padding: 5,
        textAlign: 'left'
    }
    return (
        <div style={{textAlign:'center', marginTop:20}}>
        <div style={msgboxSyle}>{text}</div><br/><br/>
        <button onClick={onClickSetText}>Text</button>&nbsp;
        <button onClick={onClickZoomIn}>Zoom In</button>&nbsp;
        <button onClick={() => setSize(size - 1)}>Zoom Out</button>
        </div>
    )
}