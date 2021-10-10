import React , { useState } from "react";

export default function TextForm(props) {
    
  //  text = "Enter Any text here"; Wrong way to set the text
   // setText("set text");
   const handleUpClick = ()=>{
    let UpperCaseValue = text.toUpperCase();
    setText(UpperCaseValue);
       console.log("You have clicked on text");
   }
   const handleOnChange = (event)=>{
      
    setText(event.target.value);
    console.log("Click On OnChange",event.target.value);
    }

const [text, setText] = useState('Enter Text Here');
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control" onChange={handleOnChange}
       value={text}
        rows="8"
      ></textarea>
      <div className="col-auto">
        <button type="submit" onClick={handleUpClick} className="btn btn-primary mb-3">
          Enter 
        </button>
      </div>
    </div>
  );
}
