import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Produto from './pages/produto/produto'
import Login from './pages/login/login'
function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/produto" element= {<Produto/>} />
                <Route path="/" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp