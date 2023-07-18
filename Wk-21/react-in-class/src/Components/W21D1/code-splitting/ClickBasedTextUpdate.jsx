import React, { useState } from 'react'
import Button from './Button'

const ClickBasedTextUpdate = () => {
    const [text, setText] = useState(null)
    const [newText, setNewText] = useState(null)
    const [isNewTextSet, setIsNewTextSet] = useState(true)

    const handleNewTextChange = (event) => {
        setNewText(event.target.value)
        if(event.target.value && event.target.value !== text){
            // This is used to control if the Button and new value text should be viewed on UI
            setIsNewTextSet(false)
        }
    }

    const updateOriginalText = () => {
        if(text !== newText){
            if(newText)
                setText(newText)
            setNewText(null)
        }
        setIsNewTextSet(true)
    }

  return (<>
    <h3>{`[+] Saved Text --- ${text !== null ? text : "Nothing"}`}</h3>
    {!isNewTextSet && <h3>{`[+] New Text --- ${newText}`}</h3>}
    <input 
        type='text' 
        placeholder='Your text here' 
        onChange={handleNewTextChange}
        value={isNewTextSet ? "" : newText}
        style={{padding: 10, margin: 10, minWidth: 300}}
        onKeyDown={(e) => e.key === "Enter" ? updateOriginalText() : ""}
        ></input>
    {!isNewTextSet && <Button onClick={updateOriginalText} text="Update Text" />}
    </>
  )
}

export default ClickBasedTextUpdate