import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("uppercase letter are on the way :)"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () =>{
    // console.log("lowercase letter are on the way :)"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleDelClick = () =>{
    // console.log("del the letters"+ text);
    let newText = "Enter Again..."
    setText(newText);
  }
  const handleOnChange = (event) =>{
    // console.log("on change is clicked text is gone :(");
    setText(event.target.value);
  }

  const handleExtraSpaces =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text,setText] = useState('');
  return (
    <div>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here"></textarea>
        </div>
        <button type="button" className="btn btn-dark mx-1" onClick={handleUpClick}>UpperCase</button>
        <button type="button" className="btn btn-dark mx-1" onClick={handleLowClick}>LowerCase</button>
        <button type="button" className="btn btn-dark mx-1" onClick={handleDelClick}>Clear</button>
        <button type="button" className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
      <div className="container my-3">
        <h2>Text Summary :</h2>
        <p>
           {text.split(" ").length} words in your sentence.
        </p>
        <p>
           {text.length } characters in your sentence.
        </p>
        <p>{0.48 * text.split(" ").length} sec to read.</p>
        <h2>Preview :</h2>
        <p>{text}</p>
      </div> 
    </div>
  )
}
