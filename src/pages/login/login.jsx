const Login = () => {


return(
    <div className="app-container">
        <div className="main-content">
            Login
        </div>

        <form action="">
            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Digite seu E-mail"/>

            </div>
            <div className="form-group">
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha"/>
                
            </div>
            <div className="form-group">
                <button>Entrar</button>
            </div>
        </form>
        <div className="register-link">
            <p>Não tem uma conta?<a href="">Cadastre-se</a></p>
        </div>
    </div>
)

}
export default Login