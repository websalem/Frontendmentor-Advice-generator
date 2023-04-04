import dice from '../assets/images/icon-dice.svg';
import { useState } from 'react';
function Main() {
    let i = 0;

    const [state, setState] = useState(
        {
            slip: {
                id: 113,
                advice: "Lemon and salt works wonders on tarnished brass."
            }
        }
    );
    const handleClick = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data =>
                setState(data)
            )
            .catch(err => console.log(err));
    }
    return (
        <>

            <div key={state.id} className="card">
                <p className="advice">ADVICE # {state.slip.id}</p>
                <h1>"{state.slip.advice}"</h1>
                <div className="divider">

                </div>
                <button onClick={handleClick} className="card-btn">
                    <img src={dice} alt="dice" />
                </button>
            </div>



        </>
    )

}
export default Main;