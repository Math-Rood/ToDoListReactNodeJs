const AnotherComponent = () => {
    const handleClick = () =>{
        console.log("Clicou no botão")
    }
    return(
        <div className="anothercomponent">
            <p>Outro Componente</p>
            <button onClick={handleClick}>Evento de Clique</button>
        </div>
    )
}

export default AnotherComponent;