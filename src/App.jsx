import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Calculator from './Calculator/Calculator'
import MarkDownPreviewer from './MarkDownPreviewer/MarkDownPreviewer'
import ExpensesCalc from './ExpensesCalc/ExpensesCalc'
import StopWatch from './StopWatch/StopWatch'
import TodoList from './TodoList/TodoList'
import RandomQuote from './Random Quote Machine/RandomQuote'
import LandingPage from './Home/LandingPage'

function App() {
  return (
    <>
      <Navbar />
      <div id='container'>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/markdown-previewer' element={<MarkDownPreviewer />} />
          <Route path='/ExpensesCalc' element={<ExpensesCalc />} />
          <Route path='/stop-watch' element={<StopWatch />} />
          {/* <Route path='/todo-list' element={<TodoList />} /> */}
          <Route path='/quote' element={<RandomQuote />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </div>
    </>
  )
}

export default App
