import { useState } from "react"
import axios from "axios";

const Usuario = () => {

//Estados separados dos campos
//Post - insere dados

const [nome, setNome] = useState("")
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [nivelAcesso, setNivelAcesso] = useState("user")
const [status, setStatus] = useState("Ativo")
const [foto, setFoto] = useState("") // Default: Ativo

const onSubmit = async (e) =>    {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3001/usuario",{
            nome: nome,
            email: email,
            senha: senha,
            nivelAcesso: nivelAcesso,
            status: status,
            foto: foto

        });
        console.log(response.data);
        alert("usuario registrado com Sucesso");

        //limpa os campos
        setNome("");
        setEmail("");
        setSenha("");
        setNivelAcesso("");
        setStatus("");
        setFoto("");

    }catch(erro){
        console.log(erro);
        alert("Erro ao cadastrar o Produto")
    }
}

return(
    <div className="app-container">
        <div className="main-content">
            Usuario
        </div>

        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome" value={nome} required onChange={(e)=> setNome(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>email:</label>
                <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>senha:</label>
                <input type="password" placeholder="Digite uma senha" value={senha} required onChange={(e)=> setSenha(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="hidden" value={nivelAcesso} required onChange={(e)=> setNivelAcesso(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="hidden" placeholder="Digite o status" value={status} onChange={(e)=> setStatus(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>foto:</label>
                <input type="file" value={foto} onChange={(e)=> setFoto(e.target.value)}/>
            </div>
            
            {/* Campo imagem */}
            <div className="form-group">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
)

}
export default Usuario