import React, { Fragment, useState } from "react"
import './App.css';
import Books from "./Components/Books";
import Footer from "./Components/Footer";
import Genre from "./Components/Genre";
import Header from "./Components/Header";
import Heading from "./Components/Heading";

const App = () => {

  const [book1, setBook1] = useState(null)
  const [book2, setBook2] = useState(null)
  return(
    <Fragment>
      <Header/>
      <Heading/>
      <Genre setBook1={setBook1} setBook2={setBook2}/>
      {book1 && <Books book1={book1} book2={book2}/>}
      <Footer/>
    </Fragment> 
  )
}

export default App;
