import "./App.css";

import StarRating from "./components/StarRating" 
// import Cards from "./components/Cards";
// import Stopwatch from "./components/Stopwatch";
// import Table from "./components/TableSort";
// import Carousel from './components/Carousel'
// import Todo from './components/TodoApp'
// import Greeting from './components/ConditionalRend'
// import DisplayListItem from './components/DisplayListItems'
// import FormHandling from './components/FormHandling'
// import SearchList from './components/SearchList'
// import Search from './components/Search'

function App() {
  return (
    <>
    <h1>Interview Questions</h1>
    <StarRating limit={5} rating={2} />
    {/* <Cards/> */}
    {/* <Stopwatch/> */}
      {/* <Table /> */}
      {/* <Carousel/> */}
      {/* <Todo/> */}
      {/* <Greeting/> */}
      {/* <FormHandling/> */}
      {/* <DisplayListItem/> */}
      {/* <Search/> */}
      {/* <SearchList/> */}
    </>
  );
}

export default App;



// export default App;
// import React, { useState } from 'react';
// import StarRating from './components/StarRating';
// import './style.css';
// const App = () => {
//   return <StarRating limit={5} rating={2} />;
// };

