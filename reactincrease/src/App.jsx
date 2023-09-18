import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
// import { useState } from 'react';
// import './profile'
function App() {
  // const [count, setCount] = useState(0)
  // let count = 1 ;
  const styles ={
    backgroundColor: '#00FF00',
    height:' 50px',
    padding: '10px',
    width: '100%'
  }
  const countstat = useState(0)
  const countd = useState(10)
  console.log(countstat)
  const [count, setCount] = countstat
  const [counts, setCounts] = countd
  console.log(count, setCount)
  const increasecount = () => {
    // count = count + 1
    setCount(count + 1)
  }

  const decreasecount = () => {
    // count = count + 1
    setCounts(counts-1)
  }

  return (
    <div>
      <h3>Numbe is increase = {count}</h3>
  <button style={styles} onClick={increasecount} text= "click me"> Increase</button>
      <h3>Numbe is decrease = {counts}</h3>
  <button style={styles} onClick={decreasecount} text= "click me"> Decrease</button>
  </div>
  )
  
}

export default App

// git remote add origin https://github.com/lillypakiyam/reactP.git
// git branch -M main
// git push -u origin main