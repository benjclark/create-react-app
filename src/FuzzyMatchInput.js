import React, { useState } from 'react';
import './App.css';
import Fuse from 'fuse.js'

function FuzzyMatchInput(props) {
  const answer = props;
  const [inputBorderColour, setInputBorderColour] = useState('red');
  const fuse = new Fuse([answer], {keys: ['answer']});

  function handleChange(event) {
    const result = fuse.search(event.target.value);
    if (result.length > 0) { setInputBorderColour('green')}
    else if (result && result.length === 0) { setInputBorderColour('red') }
  }

  return (
    <input
      type='text'
      onChange={handleChange} // does this need to be wrapped in the React hook useCallback ?
      placeholder="try mis-spelling strawberry"
      style={{width: `200px`, height: `20px`, padding: `6px`, outline: `none`, border: `1px solid ${inputBorderColour}`}}
    />
  );
}

export default FuzzyMatchInput;

