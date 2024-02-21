import { useState, useEffect } from 'react'
import todoodleLogo from './assets/toDoodleLogo.svg'
import './App.css'

function App() {
  console.log('rerender')
  const [count, setCount] = useState(0)
  const [todoodles, setTodoodles] = useState([])


  //use effect will let us define a function that doesnt run every time App() does
  useEffect(() => {
    console.log('get data')
    fetch('http://localhost:3000/todos').then((resp) => {
      resp.json().then((todoodles) => {
        console.log(todoodles)
        setTodoodles(todoodles)
      })
    })
  }, [])

  return (
    <>
      <img src={todoodleLogo} 
        height = "300"
        width = "300" />

      <div className="card">
        <button className='counter' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    
      {
        todoodles.length && todoodles.map(todoodle => {
          return (
            <div key={todoodle.title}>
            <h4>{ todoodle.title }</h4>
            <p>{ todoodle.bodyText }</p>
          </div>
          )
        })
      }
    </>
  )
}

export default App
