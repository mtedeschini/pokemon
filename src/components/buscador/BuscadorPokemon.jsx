import { React, useState } from "react";
import { useDispatch } from "react-redux";

export default function BuscadorPokemon() {

    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('mewtwo');

    return (
        <div>
            <div className="form-group">
                <label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemon</label>
                <input type="text" className="form-control" id="buscar_pokemon"
                    value={pokemonName}
                    onChange={(event) => 
                        { setPokemonName(event.target.value) }} />
                <button className="btn btn-secondary col-12 mt-3">
                    Buscar
                </button>
            </div>
        </div>
    )
}