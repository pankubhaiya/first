import { Routes,Route } from "react-router-dom";

import Login from '../Componets/Login'
import Sign from '../Componets/Sign'
import Data from '../Componets/Data';
import Home from '../Componets/Home';
import Singledata from "../Componets/SingleData";





export default function Allroute() {

    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/sign" element={<Sign></Sign>} />
            <Route path="/data" element={<Data></Data>} />
            <Route path="/single/:id" element={<Singledata></Singledata>} />          
        </Routes>

    )
}


