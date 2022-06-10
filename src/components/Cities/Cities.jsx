import axios from 'axios'
import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link,Navigate } from 'react-router-dom'

//json-server db.json --port 8080 --watch
//styles 
const Container = styled.div`
    height: 100px;
    width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Input = styled.input`
    height: 40px;
    width: 70%;
    border: 0.1px solid black;
    border-radius: 10px;
    outline: none;
    padding: 10px;
`
const Button= styled.button`
    margin: 25px;
    height: 30px;
    width: 70%;
    border-radius: 10px;
    border: none; 
`

export const Cities = ({desh,dataDo}) => {
  const [form,setForm] = useState({country:desh})
  const formHandler = (e)=>{
    const{name,value} =e.target
    setForm({
      ...form,[name]:value
    })
  }
  
  const postData = ()=>{
   if(desh == ""){
    alert("Enter Coutry Name First")
   }else{
    axios.post(`http://localhost:8080/city`, {
      ...form
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
   }
   dataDo()
  }
  return ( 
    <div>
      <Container>
        <Input type="text" name='cityName' placeholder='Enter City Name...'
        onChange={formHandler}/>
        <Input type='number' name='population' placeholder='Enter City Population...'
        onChange={formHandler}/>
        <Button
        onClick={()=>{
          postData()
        }}>
          Create A city
        </Button>
      </Container>

    </div>
  )
}
