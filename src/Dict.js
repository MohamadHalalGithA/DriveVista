import { useState } from 'react'
import definition from "./definition"


export default function Dictionary(props){
  
  const initialText = props.def1;
  const [text, setText] = useState(initialText);

  const handleToggleText = () => {
    setText((prevText) => (prevText ? "" : initialText));
  };

  return (
    <>
    
    <div className='header__meno'>
      <button className= "show-butt"onClick={handleToggleText}>
        {text ? "Hide" : "Show"}
      </button>
      <div>
        <h1 className='word'>{props.word}</h1>
        <div className='line'></div></div>
      </div>
      <div className='definition'> <h4>{text}
        </h4></div></>
      
    
  );
  
};