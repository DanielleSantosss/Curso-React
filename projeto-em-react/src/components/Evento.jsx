import Button from "./evento/Button";


function Evento() {
   function meuEvento() {
        console.log(`Olá, ativando primeiro evento!`);
    }

    function segundoEvento(){
        console.log(`Ativando o segundo evento!`)
    }
    
    return (
        <div>
            <h1>Clique aqui para disparar um evento: </h1>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )

}

export default Evento