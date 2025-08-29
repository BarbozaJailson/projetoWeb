//No terminal, dentro do seu projeto react, executa
//npm install -g json-server
//npm install axios
 
//comandos de inicializacao
//npx json-server --watch db.json --port 3001
//npm run dev
 
import api from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const Login = () => {
 
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");
 
    const navigate = useNavigate();
 
    const handleLogin = async (e) => {
      e.preventDefault();
 
      try {
        const response = await fetch(`http://localhost:3001/usuario?email=${email}&senha=${senha}`);
        const data = await response.json();
 
        if (data.length > 0) {
          setMessage("Login realizado com sucesso!");
          // Redireciona para a Home
          navigate("/home");
        } else {
          setMessage("Email ou senha inválidos.");
        }
      } catch (error) {
        setMessage("Erro ao conectar com o servidor.");
      }
    };
 
 
    return(
        <div className="app-container">
            <div className="main-content">
                Login
            </div>
            <form onSubmit={handleLogin}> {/*Aqui*/}
            <div className="form-group">
                <label>Email</label>{/*Aqui*/}
                <input type="email" placeholder="Digite seu Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required/>{/*Aqui*/}
            </div>
 
            <div className="form-group">
                <label>Senha</label>{/*Aqui*/}
                <input type="password" placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required/> {/*Aqui*/}
            </div>
            <div className="form-group">
            <button type="submit">Entrar</button>{/*Aqui*/}
            </div>
            </form>
 
             {/* Exibe a mensagem de erro ou sucesso */}
             {message && <p>{message}</p>}
 
            <div className="register-link">
                <p>
                    Não tem uma conta?<a href="/usuario">Cadastra-se</a>
                </p>
            </div>
        </div>
    )
}
export default Login