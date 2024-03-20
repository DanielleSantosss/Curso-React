import React from "react";
import { Link } from "react-router-dom";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Layout({children}){
    return(
        <>
            <ul>
                 <li><Link to='/'>Home</Link></li>
                <li><Link to='/sobreMim'>Sobre Mim</Link></li>
                <li><Link to='/Contato'>Contato</Link></li>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
             </ul>
             {children}
        </>       
    )
}

export default Layout