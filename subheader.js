import React from "react";
import './Subheader.css'
export default ({ aqua })=> {
    return (
        <subheader className= {aqua?'aqua':''}>
            <div className="Subheader">
                <p> Produtos.    Cadastrados.</p>
                <p>+ Adicionar Produto.</p>
            </div>
        </subheader>   
        )
}