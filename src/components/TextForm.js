import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState('');
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase())
    }

    const handleTextContent = (event) => {
        setText(event.target.value)
    }

    const handleLowerCaseClick = () => {
        setText(text.toLowerCase())
    }

    const handleClearText = () => {
        setText('')
    }

    return (
        <div>
            <div className="form-group m-4">
                <label htmlFor="exampleFormControlTextarea1">Enter your text here</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleTextContent}></textarea>
            </div>
            <button type="submit" className="btn btn-primary me-4" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
            <button type="submit" className="btn btn-primary me-4" onClick={handleLowerCaseClick}>Convert to Uppercase</button>
            <button type="submit" className="btn btn-primary" onClick={handleClearText}>Clear</button>
        </div >
    )
}
