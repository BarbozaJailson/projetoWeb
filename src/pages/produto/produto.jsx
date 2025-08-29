import { useState } from "react"
import axios from "axios";

const Produto = () => {

//Estados separados dos campos
//Post - insere dados

const [vnome, setNome] = useState("")
const [vdesc, setDesc] = useState("")
const [vpreco, setPreco] = useState("")
const [vstatus, setStatus] = useState("Ativo") // Default: Ativo

const onSubmit = async (e) =>    {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3001/produto",{
            nome:vnome,
            descricao:vdesc,
            preco:vpreco,
            status:vstatus
        });
        console.log(response.data);
        alert("produto registrado com Sucesso");

        //limpa os campos
        setNome("");
        setDesc("");
        setPreco("");
        setStatus("");

    }catch(erro){
        console.log(erro);
        alert("Erro ao cadastrar o Produto")
    }
}

return(
    <div className="app-container">
        <div className="main-content">
            Produto
        </div>

        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nome:</label>
                <input type="text" placeholder="Digite o nome" value={vnome} required onChange={(e)=> setNome(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>descrição:</label>
                <input type="text" placeholder="Digite descrição" value={vdesc} onChange={(e)=> setDesc(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Preço:</label>
                <input type="text" placeholder="Digite preço" value={vpreco} required onChange={(e)=> setPreco(e.target.value)}/>
            </div>
            {/* Campo imagem */}
            <div className="form-group">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
)

}
export default Produto