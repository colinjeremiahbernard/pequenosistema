import React from "react";
import './Header.css'

export default ({ aquamarine })=> {
    return (
        <header className= {aquamarine?'aquamarine':''}>
            <div className="Header-Logo">
                <img src=" " alt="imagem do cabeçalo"/>
                <p> 
                     MIME 
                      Lojinha Mime 
                </p>
                <p>
                    Pagina Inicial.  Vendas. Produtos. Clientes. Marketing.
                </p>
            </div>
        </header>   
        
    )
}
