import React , { useState } from "react";

export default function TextForm(props) {
    
  //  text = "Enter Any text here"; Wrong way to set the text
   // setText("set text");
  //buttom hendled
   const handleUpperCaseClick = ()=>{
    let UpperCaseValue = text.toUpperCase();
    setText(UpperCaseValue);
       console.log("You have clicked on handleUpperCaseClick");
   }
   
   const handleLowerCaseClick = ()=>{
    let lowweCaseValue = text.toLowerCase();
    setText(lowweCaseValue);
       console.log("You have clicked on handleLowerCaseClick");
   }
   const handleCopyTextClick = ()=>{
      let copyText = document.getElementById("textFeild");
      /* Select the text field */
      copyText.select();
       /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
    
   }
   const ClearSpace = ()=>{
   
    let SpaceText  = text.split(/[ ]+/);
    console.log(SpaceText);
    let newString  = SpaceText.join(" ")
    setText(newString);
    
   }


   // on change eventn for text
   const handleOnChange = (event)=>{
    setText(event.target.value);
    console.log("Click On OnChange",event.target.value);
    }


//use react hook

const [text, setText] = useState('');



  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control" onChange={handleOnChange} id="textFeild"
       value={text}
        rows="8"
      ></textarea>
      <div className="col-auto">
        <button  type="submit" onClick={handleUpperCaseClick} className="btn btn-primary mb-3 my-3">
          UPPERCASE
        </button>
        <button type="submit" onClick={handleLowerCaseClick} className="btn btn-primary mb-3 my-3">
          lowercase
        </button>
        <button type="submit" onClick={handleCopyTextClick} className="btn btn-primary mb-3 my-3" >
          copy text
        </button>
        <button type="submit" onClick={ClearSpace} className="btn btn-primary mb-3 my-3 ">
          clear space
        </button>
      </div>
    </div>
  );
}
