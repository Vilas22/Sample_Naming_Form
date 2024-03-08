// components/NameForm.js
"use client"
import { useEffect, useState } from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    // Your client-side logic can go here, if needed
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  const onChange = (e) => setName(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: "100%", }}>
        <center>
          <label htmlFor='name' style={{ color:"#2c5777",fontSize: 15, marginRight:'5px' }}>
            Name:
          </label>
          <input
            type="text"
            id='name'
            value={name}
            onChange={onChange} 
            style={{padding:4, borderColor:"#7aa7c7", marginBottom: "5px", borderRadius:5 , boxShadow:"#7aa7c7"}}
            />
          <br />
          <button className="button" type="submit" style={{marginLeft:25,}}>Submit</button>
        </center>
      </div>
    </form>
  );
};

export default Form;
