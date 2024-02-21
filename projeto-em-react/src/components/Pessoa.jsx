function Pessoa ({foto, nome, sobrenome, idade, profissao}){
    return(
        <div>
            <img src={foto} alt="" />
            <h2>Nome: {nome}</h2>
            <p>Sobrenome: {sobrenome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa