import React, { useEffect, useState } from "react";
import axios from 'axios';

function Home() {

  const [SDate, setSDate] = useState('');
  const [EDate, setEDate] = useState('');
  const [Desc, setDesc] = useState('');

  const addLog = async (s, e , d) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/log/addlog`,
       { "sdate":s, "edate":e, "desc":d });
      alert("log entry added")
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addLog(SDate,EDate, Desc );
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
        
          <label> Start Date </label><br />
          <input 
            value={SDate}
            type="datetime-local" 
            name="s_date" 
            onChange={e => setSDate(e.target.value)}/>
          <br />
          
          <label> End Date </label><br />
          <input
            value={EDate}
            type="datetime-local" 
            name="e_date" 
            onChange={e => setEDate(e.target.value)}/>
          <br />
  
          <label> Description </label><br />
          <textarea
            value={Desc}
            type="textarea" 
            name="e_date" 
            onChange={e => setDesc(e.target.value)}/>
          <br />
          <button type="submit"> Submit </button>
  
        </form>
      </div>
    );
  }
  
  export default Home;
  