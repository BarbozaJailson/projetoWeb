import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Produto from './pages/produto/produto'
function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/produto" element= {<Produto/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp