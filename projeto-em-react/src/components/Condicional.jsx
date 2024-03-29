import { useState } from "react"


function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail(' ')
    }
    
    
    return (
        <div>
            <h2>Cadastre o seu e-mail: </h2> 
            <form>
                <input type="email" placeholder="Digite seu e-mail..." id="email" onChange={(e) => setEmail(e.target.value)}/><br />
                <button onClick={enviarEmail}>Enviar e-mail</button>
            </form>             
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )

}

export default Condicional