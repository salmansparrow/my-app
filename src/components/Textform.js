import React, {useState} from "react"

export default function Textform(props) {  
    //Upper case
  
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    setText("You Have clicked on handleUpclick");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To Upper Case","success");
  }

  const handleloClick = ()=>{
    console.log("Uppercase was clicked" + text);
    setText("You Have clicked on handleUpclick");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To Lower b Case","success");

  }

  const handlecleartext = ()=>{
    console.log("handlecleartext was clicked" + text);
    setText("You Have clicked on handlecleartext");
    let newText = '';
    setText(newText)
    props.showAlert("Text Has Been Cleared","success");
  }
  
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const handlecopytext = (event)=>{
    console.log("text copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Has Been Copy","success");

  }

  const handleremtext = ()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Has Been Removed","success");

  }

  const [text, setText,] = useState('');
// text = "new text"; // wrong way to chagne the state
// setText{"new text"}; // correct way to change the state
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
    color: props.mode==='dark'?'white':'black'}}id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case </button> 
    <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lower Case </button> 
    <button className="btn btn-primary mx-2" onClick={handlecleartext}>Clear Text </button> 
    <button className="btn btn-primary mx-2" onClick={handlecopytext}>Copy Text </button> 
    <button className="btn btn-primary mx-2" onClick={handleremtext}>Remove Extra Text </button> 

   </div>

   <div className="container my-6" style={{color: props.mode==='dark'?'white':'black'}}>

    <h2>Your Text Summary</h2>
    <p> {text.split(" ").length} words and {text.length} Chracters </p>
    <p> {0.008 * text.split(" ").length} Minutes Read </p>

    <h2>Preview</h2>
    <p>{text.length>0?text: "Enter something in the above Text-Box to preview it here"}</p>
     
   </div>

   </>
  )

 
}
