import React from "react";
import { connect } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from "../redux/actions/gameShopAction";

function ComprarPokemon(props){
    return(
        <div className="text-center">
            <button onClick={() => {props.buy_pokemon_action(1)}} className="btn btn-dark btn-sm mb-1">Comprar Valorant</button>
            <button onClick={() => {props.return_pokemon_action(1)}} className="btn btn-dark btn-sm mb-1">Regresar Valorant</button>
        </div>
    )
}

const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
}

export default connect(null, mapDispatchToProps)(ComprarPokemon);