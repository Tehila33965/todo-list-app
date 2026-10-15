import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { TodoList } from './TodoList/TodoList.jsx'

function App() {
  return (
    <>
      <TodoList></TodoList>
    </>
  )
}

export default App
