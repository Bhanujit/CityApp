
// import { createContext, useState , useEffect } from "react";

// export const DataContext = createContext()

// export const ApiDataProvider = ({children})=>{
//     const [apiData,setApiData] = useState([])

//     async function getData(){
//         let res = await fetch ('https://newsapi.org/v2/everything?q=tesla&from=2022-03-27&sortBy=publishedAt&apiKey=c58307cdcaba42158d95f9abda5c9800')
//         let data = await res.json()
//         setApiData(data.articles)
//     }
//     useEffect(()=>{
//         getData()
//     },[])

//     return <DataContext.Provider value={apiData}>
//            {children}
//            </DataContext.Provider>
    



// }