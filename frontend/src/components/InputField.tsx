import React from 'react';
import "./styles.css";

const InputField = () => {
  return (
    <form className='input'>
        <input type='input' placeholder= 'Add an item!' className='input__box'/>
        <button className='input__submit' type='submit'>
            Add
        </button> 
    </form>
  )
}

export default InputField
