import React from "react";

export default function ResultadoPokemon() {
    return (
        <div className="border-top mt-4">
            <h4 className="text-white mt-4" >Resultado</h4>
            <p className="text-warning">Buscando...</p>
            <div className="text-success">
                <img src="" alt="" />
                <span>Pikachu</span>
            </div>
            <span className="text-danger">Error</span>
        </div>
    )
}