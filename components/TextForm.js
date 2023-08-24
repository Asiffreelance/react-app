import React, {useState} from 'react'

export default function TextForm(props) {

const upperCaseClicked  = ()=>{
let newText = text.toUpperCase();
setText(newText);
props.showAlert("Converted to Uppercase", "success")
}
const lowcaseClicked  = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
    }
    const clearClicked  = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("cleared", "success")
        }
const onchangeClicked = (event)=>{
setText(event.target.value)

}

const handleCopied = ()=>{

 var text = document.getElementById("myTextarea");
  
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied", "success")
  
}

    const [text, setText] = useState("");
  return (


   
    <>
    <h4>{props.heading}</h4>
      <div className="container">
    <textarea id="myTextarea" rows="6" cols="50" value={text} onChange={onchangeClicked} ></textarea>
    <div className="button-container">
      <button disabled = {text.length===0} id="upperCaseClicked"  onClick={upperCaseClicked}>convert into Upercase</button>
      <button disabled = {text.length===0} id="lowcaseClicked" onClick={lowcaseClicked}>convert into lowercase</button>
      <button disabled = {text.length===0} id="clearClicked" onClick={clearClicked}>Clear Text</button>
      <button disabled = {text.length===0} id="handleCopied" onClick={handleCopied}>Copy Text</button>
     
    </div>
    </div>

    <h2>Text Summary</h2>
    <div>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      
        
    
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


