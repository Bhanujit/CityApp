import React, {useState,useEffect} from "react";


const Pagination = ({showPerPage, onChange,onShowChange}) => {
  // TODO: Remove below const and instead import them from chakra
  
  const [counter,setCounter] = useState(1)
  useEffect(() => {
    const value = showPerPage * counter
    onChange(value - showPerPage, value)
  }, [counter])
  
  return (
    <div>
      <button data-cy="pagination-first-button" onClick={()=>{setCounter(counter-1)}}>Prev</button>
      <select data-cy="pagination-limit-select" onChange={(e)=>{onShowChange(e.target.value)}}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </select>
      <button data-cy="pagination-last-button" onClick={()=>{setCounter(counter+1)}}>Next</button>
    </div>
  );
};

export default Pagination;