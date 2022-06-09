// import React from "react";
// import styled from "styled-components";
// import { DataContext } from '../context/DataContext'
// import { useContext } from "react";


// export const NewsHome = ()=>{
//     const Data = useContext(DataContext)
//     const Container = styled.div`
//         height: 610px;
//         width:90%;
//         border: 2px solid black;
//         margin: 80px auto;
//         display: grid;
//         grid-template-columns: 1fr 1fr 1fr 1fr;
//         grid-template-rows: 1fr 1fr 1fr 1fr;
//     `
//     const Card = styled.div`
//     height: 280px;
//     margin: 10px;
//     display: flex;
//     flex-direction:column;
//     align-items: center;

//     `
//     const BigImage = styled.img`
//     height: 100%;
//     width: 100%;
//     `
//     const Image = styled.img`
//         height: 50%;
//         width: 90%;
//     `
   
    

//     return (
//         <Container>
//          {Data.map((e)=>{
//              return <Card>
//                  <Image src={e.urlToImage}/>
//                  <h3>{e.title}</h3>
                 
//                    </Card>
//          })}
//         </Container>
//     )
// }


// // author: "Michael Withers and Steven Boivie"
// // content: "It appears Twitter's board of directorsfinally warmed to Elon Musk's hostile bid and agreed to a salebut not before it took a severe beating from the Tesla and SpaceX billionaire, Twitter founder Jac… [+6699 chars]"
// // description: "It appears Twitter's board of directors finally warmed to Elon Musk's hostile bid and agreed to a sale—but not before it took a severe beating from the Tesla and SpaceX billionaire, Twitter founder Jack Dorsey and other prominent users on their own social net…"
// // publishedAt: "2022-04-27T17:20:01Z"
// // source: {id: null, name: 'Tech Xplore'}
// // title: "Elon Musk won't have a board to watch him when he takes Twitter private. Does that matter?"
// // url: "https://techxplore.com/news/2022-04-elon-musk-wont-board-twitter.html"
// // urlToImage: "https://scx2.b-cdn.net/gfx/news/hires/2022/elon-musk.jpg"