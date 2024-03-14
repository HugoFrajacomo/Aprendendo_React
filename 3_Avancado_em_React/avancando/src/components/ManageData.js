import { useState } from 'react';

const ManageData = () => {
    let someData = 10;
    console.log(someData)

    const [number, setNumber] = useState(28);
    
    console.log(number)
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick = {() => (someData = 15)}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick = {() => setNumber(25)}>Mudar Variável com useState</button>
        </div>
    </div>
  )
}

export default ManageData