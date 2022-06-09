import React,{useState} from 'react'
import styled from 'styled-components'
import Pagination  from './Pagination'

const Container = styled.div`
height: 900px;
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
export const ShowList = ({data}) => {
    const [pagination,setPagination] = useState({start:0,end:3})
  const[showPerPage,setShowPerPage] = useState(3)

  function onShowChange(val){
    setShowPerPage(val)
    console.log(showPerPage)
  }

  function onPagination(start,end){
    setPagination({start:start, end:end})
  }
  return (
    <div>
        <Pagination showPerPage = {showPerPage} onChange={onPagination} onShowChange={onShowChange} />
        <Container>
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

    </div>
  )
}
