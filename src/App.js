import "./App.css"
import {useState } from "react"
//components **************************
import Header from "./components/header"
import Pagination from "./components/pagination"
import Footer from "./components/footer"
import Item from './components/item'


function App() {
  const [person, setPerson] = useState([])
  const [num, setNum] = useState(1)
  return (
    <>
      <Header />
      <Item person={person} setPerson={setPerson} num={num}/>
      <Pagination num={num} setNum={setNum} />
      <Footer />
    </>
  )
}

export default App
