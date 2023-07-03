import { useState, useEffect } from "react";

const Hooks = () => {
    let age = 30;
    const [newAge, setNewAge] = useState()

    const changeAge = () => {
        age = 31;
        console.log(age);
    };

    const changeNewAge = () => {
        setNewAge(45);
    }

    useEffect(() => {
        console.log('Testando');
    })

    return(
        <div>
            <p>Idade: {age}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Idade: {newAge}</p>
            <button onClick={changeNewAge}>Mudar Nova Idade</button>
        </div>
    )
}