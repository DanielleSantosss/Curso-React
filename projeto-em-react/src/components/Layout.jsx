import React from "react";
import { Link } from "react-router-dom";

function Layout({children}){
    return(
        <>
            <ul>
                 <li><Link to='/'>Home</Link></li>
                <li><Link to='/sobreMim'>Sobre Mim</Link></li>
                <li><Link to='/Contato'>Contato</Link></li>
             </ul>
             {children}
        </>       
    )
}

export default Layout