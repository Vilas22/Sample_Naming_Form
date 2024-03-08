// pages/index.js
"use client"
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import dynamic from 'next/dynamic';
const DynamicForm = dynamic(() => import('./components/Form'), { ssr: false });

const Home = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (name) => {
    setLoading(true);
    try {
      const [agifyResponse, genderizeResponse, nationalizeResponse] = await Promise.all([
        axios.get(`https://api.agify.io?name=${name}`),
        axios.get(`https://api.genderize.io?name=${name}`),
        axios.get(`https://api.nationalize.io?name=${name}`),
      ]);
      setLoading(false);
      setResult({
        agify: agifyResponse.data,
        genderize: genderizeResponse.data,
        nationalize: nationalizeResponse.data,
      });
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{}}>Name YourSelf</h1>
      </div>
      <br />
      <div>
        <DynamicForm onSubmit={fetchData} />
      </div>
      <br />
      {loading && <div style={{display:'flex', justifyContent:'center', color:"#2c5777", fontSize:18}}>
        Loading...
        </div>}
      {result && (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'center',alignItems:'center'}}>
          <h2>Guess Results</h2>
          <label><b>Name : {result?.agify?.name}</b></label>
          <label><b>Age : {result?.agify?.age}</b></label>
          <label><b>Gender : {result?.genderize?.gender}</b></label>
          <label><b>Country : {result?.nationalize?.country?.map((itm) => <span style={{paddingLeft:"3px"}}>{itm?.country_id},</span>)}</b></label>
          <br />
          <span>All Data:</span>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
