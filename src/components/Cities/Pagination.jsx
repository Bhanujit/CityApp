import React, {useState,useEffect} from "react";
import styled from 'styled-components'

const Container = styled.div`
width: 80%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
`
const Btn = styled.button`
  height: 45px;
  width: 60px;
  border: 0.2px solid black;
  border-radius: 14px;
  background-color: #2525a3;
`
const Pagination = ({showPerPage, onChange,limit}) => {
  
  const [counter,setCounter] = useState(1)
  useEffect(() => {
    const value = showPerPage * counter
    onChange(value - showPerPage, value)
  }, [counter])
  
  return (
    <Container>
      <Btn data-cy="pagination-first-button" onClick={()=>{
        if(counter > 1){
          setCounter(counter - 1)
        }
        }}>Prev</Btn>
      
      
      <Btn data-cy="pagination-last-button" onClick={()=>{
        if(counter<limit){
          setCounter(counter+1)
        }
      }}>Next</Btn>
    </Container>
  );
};

export default Pagination;