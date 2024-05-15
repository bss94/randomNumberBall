import {useState} from "react";
import './App.css'
import NumBall from "./components/NumBall/NumBall";

function App() {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32])

  return (
      <>
        <button className='num-btn' onClick={}>New numbers</button>
        <div className="num-ball">
          {numbers.map((number, index) => {
            return <NumBall number={number} key={index + number}/>
          })}
        </div>

      </>
  )
}

export default App
