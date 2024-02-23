import { useState } from "react";

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(name)
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="name">Nome: </label>
                <div>
                    <input type="text" id="name" name="name" placeholder="Digite o nome aqui: " onChange={(e) => setName(e.target.value)}/>
                </div>
                <label htmlFor="password">Senha: </label>
                <div>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha aqui: " onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form