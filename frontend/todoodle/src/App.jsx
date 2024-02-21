import { useState, useEffect } from 'react'
import todoodleLogo from './assets/toDoodleLogo.svg'
import './App.css'

function App() {
  console.log('rerender')
  const [todoodles, setTodoodles] = useState([])
  const [inputValue, setInputValue] = useState('')

  function handleChnge(e){
    setInputValue(e.target.value)}

  function handleSubmit(e){
    e.preventDefault()
    setTodoodles([...todoodles, inputValue])
    setInputValue('')
  }

  function handleDelete(index){
    const newTodoodles = [...todoodles]
    console.log(newTodoodles[index])
    newTodoodles.splice(index, 1)
    setTodoodles(newTodoodles)

  }

  return (
    <>
      <img src={todoodleLogo} 
        height = "400"
        width = "400" />

      <div>
        <form>
          <input type="text" value={inputValue} onChange={handleChnge}/>
          <div></div>
          <button onClick={handleSubmit}> Add ToDoodle </button>
        </form>
        <ul>
          {todoodles.map((todoodle, index) =>
            <li key={index}>{todoodle}
            <button onClick={() => handleDelete(index)}> Complete </button>
            </li>
            )}
        </ul>
      </div>
    </>
  )
}

export default App
