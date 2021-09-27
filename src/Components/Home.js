import React, { useState } from "react";

function Home() {

  const [SDate, setSDate] = useState('');
  const [EDate, setEDate] = useState('');
  const [Desc, setDesc] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(SDate, EDate, Desc);
  }

  //var date = moment().format('YYYY-MM-DDTHH:mm');

    return (
      <div>
        <form onSubmit={handleSubmit}>
        
          <label> Start Date </label><br />
          <input 
            value="yyyy-MM-ddThh:mm"
            type="datetime-local" 
            name="s_date" 
            onChange={e => setSDate(e.target.value)}/>
          <br />
          
          <label> End Date </label><br />
          <input 
            value="datetime" 
            type="datetime-local" 
            name="e_date" 
            onChange={e => setEDate(e.target.value)}/>
          <br />
  
          <label> Description </label><br />
          <textarea 
            value="desc" 
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
  