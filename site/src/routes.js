import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Home  from "./pages/Home";
import  Verdura  from "./pages/Verdura";
import  Fruta  from "./pages/Fruta";
import  Legume  from "./pages/Legume";
import  Hortalica  from "./pages/Hortalica";

import  Carrinho  from "./pages/Carrinho";
import  Login  from "./pages/Login";


import  Header  from "./conponents/Header";
import  Footer  from "./conponents/Footer";

function RoutesApp(){   
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Verdura" element={<Verdura />} />
                <Route path="/Fruta" element={<Fruta />} />
                <Route path="/Legume" element={<Legume />} />
                <Route path="/Hortalica" element={<Hortalica />} />
                <Route path="/Carrinho" element={<Carrinho />} />
                <Route path="/Login" element={<Login />} />
                
                
            </Routes>

            <Footer />
            
        </BrowserRouter>
    );
}

export default RoutesApp;