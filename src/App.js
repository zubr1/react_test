import React, { useState } from 'react';
import './App.css';

const initialState = {
  text: '',
  words: 0
}

function App() {
  const [leftTextArea, setLeftTextArea] = useState(initialState);
  const [rightTextArea, setRightTextArea] = useState(initialState);

  const countWords = (text) => {
    const trimmedText = text.trim();
    if(!trimmedText)
      return 0;

    return trimmedText.split(' ').length;
  }

  const onChangeLeftTextArea = (e) =>{
    const text = e.target.value;
    const words = countWords(text);
    setLeftTextArea({text, words})
  }  
  
  const onChangeRightTextArea = (e) =>{
    const text = e.target.value;
    const words = countWords(text);
    setRightTextArea({text, words})
  }

  const areEqual = leftTextArea.text === rightTextArea.text;

  return (
    <div className="App">
      <textarea
        value={leftTextArea.text}
        onChange={onChangeLeftTextArea}
      />
      {areEqual && <label className="sign">equal</label>}
      {!areEqual && <label className="sign">not equal</label>}
      <textarea
        value={rightTextArea.text}
        onChange={onChangeRightTextArea}
      />
      <div />
      <label className="count">Word count: {leftTextArea.words}</label>
      <label className="count">Word count: {rightTextArea.words}</label>
    </div>
  );
}

export default App;
