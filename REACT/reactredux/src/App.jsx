import { useState } from 'react'

import './App.css'
import Addtodo from './components/AddTodo'
import Todos from './components/Todo'
function App() {
  

  return (
    <>
      <h1> Learn about redux toolkit</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
