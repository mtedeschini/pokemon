import React from "react";
import { useDispatch } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from "../redux/actions/gameShopAction";

export default function CantidadPokemonHook() {
    
    const dispatch = useDispatch();
    
    return (
        <div className="text-center">
            <button onClick={() => {dispatch(buy_pokemon_action(1))}} className="btn btn-dark btn-sm mb-1">Comprar Pokemon</button>
            <button onClick={() => {dispatch(return_pokemon_action(1))}} className="btn btn-dark btn-sm mb-1">Regresar Pokemon</button>
        </div>
    )
}

