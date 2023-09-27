
import './App.css';
import {useState} from 'react'
import  axios  from "axios";

function App() {

  const[email,setemail] = useState('');
  const[password,setpassword] = useState('')


  const handleSubmit = ()=>{
   axios.post('http://localhost:3001/login',{email,password}).then((res)=>{
    console.log();
    if (res.data.success) {
      alert('Login Success')
    } else {
      alert('Login failed!')
    }
   })
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
