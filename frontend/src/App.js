
import './App.css';
import {useState} from 'react'


function App() {

  const[email,setemail] = useState('');
  const[password,setpassword] = useState('')


  const handleSubmit = ()=>{
    console.log(email,password)
  }
  return (
    <div className="App">
      <header className="App-header">
       <label> Email</label>
       <input onChange={(e)=>setemail(e.target.value)} value={email} type='email' />

       <label> password</label>
       <input onChange={(e)=>setpassword(e.target.value)} value={password} type='password' />

       <button onClick={handleSubmit} >Submit</button>
      </header>
    </div>
  );
}

export default App;
