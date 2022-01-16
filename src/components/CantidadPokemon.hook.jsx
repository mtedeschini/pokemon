import React from "react";
import { useSelector } from "react-redux";

export default function CompraPokemonHook() {

    const game_shop = useSelector((state) => state.game_shop)

    return (
        <div className="card-title h3 text-center">
            Unidades: {game_shop.pokemon}
        </div>
    )
}

