import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Pagination  from './Pagination'

const Container = styled.div`
height: 100px;
width: 80%;
margin: 60px auto;
`

const Th = styled.th`
    width: 40%;
    text-align: left;
    /* border: 2px solid black; */
`
const Tr = styled.tr`
    border: 2px solid black;
`

const Tontainer = styled.div`
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
export const ShowList = ({data,getData}) => {
    const [pagination,setPagination] = useState({start:0,end:3})
  const[showPerPage,setShowPerPage] = useState(3)

  function onShowChange(val){
    setShowPerPage(val)
    console.log(showPerPage)
  }
  const length = data.length
  const limit = Math.ceil(length/showPerPage)
  function onPagination(start,end){
    setPagination({start:start, end:end})
  }
  function Sort(val){
    if(val !== ""){
      getData(`http://localhost:8080/city?_sort=population&_order=${val}`)
    }
  }
  const [value,setValue]=useState("")
  useEffect(()=>{
    Sort(value)
  },[value])
  return (
    <div>
        <Container>
        <select onChange={(e)=>setValue(e.target.value)}>
            <option value="asc">
              Low to High
            </option>
            <option value="dsc">
              High to Low
            </option>
          </select>
            <table>
                <tr>
                <Th><h1>Country</h1></Th>
                <Th><h1>City</h1></Th>
                <Th><h1>Population</h1></Th>
                </tr>
                {data.slice(pagination.start,pagination.end).map((e)=>{
                  return(<tr>
                    <td>{e.country}</td>
                    <td>{e.cityName}</td>
                    <td>{e.population}</td>
                    <button>remove</button>
                  </tr>)
                })}
            </table>
        </Container>
                <Pagination showPerPage = {showPerPage} onChange={onPagination} onShowChange={onShowChange} 
                limit = {limit} />

    </div>
  )
}
