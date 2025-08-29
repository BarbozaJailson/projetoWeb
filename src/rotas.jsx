import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Produto from './pages/produto/produto'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Header from './pages/header/header'
import Usuario from './pages/usuario/usuario'
function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                {/* link externo */}
                <Route path="/" element={<Login/>} />
                <Route path="/usuario" element={<Usuario/>} />

                <Route element={<Layout/>}>
                    {/* Links internos */}
                    <Route path="/home" element= {<Home/>} />
                    <Route path="/produto" element= {<Produto/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

//layout com Header

function Layout (){
    return(
        <>
            <Header /> {/* Exibe o cabeçalho */}
            <main>
                <Outlet /> {/* Exibe o corpo da pagina */}
            </main>
        </>
    )
}
export default RoutesApp