import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY=process.env.REACT_APP_UNSPLASH_KEY;

const App = () =>{
  const [word,setword] =useState('');

  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
    fetch('https://api.unsplash.com/photos/random/query=${word}&client_id=${UNSPLASH_KEY}')
    .then ((res)=>res.json())
    .then ((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <div>
      <Header title= "DIGITAL ANIMAL PARK" />
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
