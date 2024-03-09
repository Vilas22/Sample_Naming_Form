
"use client"
import { useEffect, useState } from 'react';
import '../components/form.css'

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    if (name.trim() === '') {
      alert('please the name')
  }
  };

  const onChange = (e) => setName(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: "100%", }}>
        <center>
          <label htmlFor='name' className="Label">
            Name:
          </label>
          <input
            type="text"
            id='name'
            value={name}
            onChange={onChange} 
            className="Input"
            />
          <br />
          <button className="button" type="submit" style={{marginLeft:25,}}>Submit</button>
        </center>
      </div>
    </form>
  );
};

export default Form;
