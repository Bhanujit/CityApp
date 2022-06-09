
import './App.css';
import { Countries } from './components/Countries/Countries';
import { useState,useEffect } from 'react';
import { NewsHome } from './components/Newspaper';
import { Routes,Route} from 'react-router-dom'
import { Cities } from './components/Cities/Cities';
import { ShowList } from './components/Cities/ShowList';
import axios from 'axios'

function App() {
  const [nation,setNation] = useState("")
  function deshSetting(val){
    setNation(val)
  }
  const [data,setData] = useState([])
  function getData (){
    axios.get(`http://localhost:8080/city`)
    .then((res)=>{setData(res.data)})
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
    <Routes>
      <Route path='/' element={<Countries deshKaNaam={deshSetting}/>}></Route>
      <Route path='/City' element={<Cities desh={nation}
      dataDo={getData}
      />}></Route>
    </Routes>
    <ShowList data={data} getData={getData}/>
    </div>
  );
}

export default App;
