import {useState} from "react";
import './App.css'
import NumBall from "./components/NumBall/NumBall";

function App() {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32])

    const getRandNumbers = () => {
        let newNumbers: number[] = [];
        while (newNumbers.length < numbers.length) {
            const newNumber: number = Math.floor(Math.random() * (37 - 5) + 5);
            let check: boolean = false;
            if (newNumbers.length > 0) {
                for (let i = 0; i < newNumbers.length; i++) {
                    if (newNumber === newNumbers[i]) {
                        check = true;
                        break;
                    }
                }
            }
            if (!check) {
                newNumbers.push(newNumber);
            }
        }
        setNumbers(newNumbers.sort((a, b) => {
            return a - b
        }));
    }
    return (
        <>
            <button className='num-btn' onClick={getRandNumbers}>New numbers</button>
            <div className="num-ball">
                {numbers.map((number, index) => {
                    return <NumBall number={number} key={index + number}/>
                })}
            </div>
        </>
    )
}

export default App
