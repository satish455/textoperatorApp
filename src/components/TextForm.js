// import React from 'react'
import React, { useState } from 'react';

import './TextForm.css'

function TextForm(props) {

    const [text, setText] = useState(' ');

    // wrong way to use hooks
    // setText="jkfvkjfv"
    // setText("bbvfbvbv")   right Way to set 


    const handleUpClick=()=>{
        console.log("Upper Case Was Clicked" +text);
        let newtext=text.toUpperCase();
        setText(newtext);
        alert("Upper Case Was Clicked");

    }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
       
    }

    const handleloClick =()=>{
      console.log("Lower Case Was Clicked" +text);
      let newtext=text.toLowerCase();
      setText(newtext);
      alert("Lower Case Was Clicked");


  }

  const ClearBox =()=>{
    console.log("ClerBox  Was Clicked" +text);
    let newtext=" ";
    setText(newtext);
    window.confirm("Do You Want To clear Your Text"); 
  }

const removespace =()=>{
  console.log("ClerBox  Was Clicked" +text);
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  alert("Remove Space Was Clicked");


}
const copytext =()=>{
  var text=document.getElementById("mybox");
  text.select();
  // newtext.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(text.value);
  
  

  alert("Copied the text: " + text.value);



}



  return (
<>

<div>
 

<div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>

<div className="mb-3">

<h1>{props.heading}</h1>
<label htmlFor="mybox" className="form-label">{props.heading1}</label>
<textarea onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}  className="form-control" value={text}  id="mybox" rows="8">{props.Heading}</textarea>

</div>
<button className="btn btn-warning"   onClick={handleUpClick}>
      Convert To UpperCase
</button>

<button className="btn btn-warning mx-4"   onClick={handleloClick}>
      Convert To LowerCase
</button>

<button className="btn btn-warning mx-0"   onClick={ClearBox}>
      Clear Text
</button>

<button className="btn btn-warning mx-4"   onClick={removespace}>
      RemoveSpace
</button>
<button className="btn btn-warning mx-2"   onClick={copytext}>
      Copy text 
</button>
   
    </div>


  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p> Number Of Words And {text.split(" ").length} Number of Characters are {text.length}</p>
    
    <p>Maximum Time To read {0.008*text.split(" ").length} </p>

    <h1>Preview</h1>
       
    {/* <p>{text.length>0?text:"Nothing to preview!"}</p> */}
    <p>{text.length>0?text:"Nothing to preview!"}</p>

    </div>

     
</div>
   
    </>
  )
  
}

export default TextForm