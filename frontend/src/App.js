import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';


const App = () =>{
  const [word,setword] =useState('');

  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
  }

  
  return (
    <div>
      <Header title= "DIGITAL ANIMAL PARK" />
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
