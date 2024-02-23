function Evento({ numero }) {

    function meuEvento() {
        console.log(`Olá, você clicou em mim! ${numero}`);
    }
    
    return (
        <div>
            <h1>Clique aqui para disparar um evento: </h1>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )

}

export default Evento