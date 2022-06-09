import styledEngine from '@mui/styled-engine'
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//json-server db.json --port 8080 --watch
//styles 
const Container = styled.div`
    height: 100px;
    width: 800px;
    margin: 10px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* border: 1px solid black; */
   
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

export const Countries = ({deshKaNaam}) => {
  const [country,setCountry] = useState("")
  
  return (
    <Container>
        
        <Input type="text" onChange={(e)=>{setCountry(e.target.value)}}
        placeholder="Enter a country Name"/>
        <Button onClick={()=>{deshKaNaam(country)}}>
          <Link to ="/City">Create A country</Link>
        </Button>
    </Container>
  )
}
