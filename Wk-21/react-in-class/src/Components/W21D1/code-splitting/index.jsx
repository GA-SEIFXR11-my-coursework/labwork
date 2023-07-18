import React from 'react'
import Button from "./Button"
import Para from './Para'
import ClickBasedTextUpdate from './ClickBasedTextUpdate'

const CodeSplitting = () => {
  return (
    <div>
      {/* <p>This is my text.</p>
      <button>Click me!</button> */}
      <Para text={"This is my text!"} />
      <Button text="Click me!! Though I do nothing :(" />
      <hr />
      <ClickBasedTextUpdate/>
    </div>
  )
}

export default CodeSplitting