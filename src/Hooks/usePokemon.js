import { useCallback, useEffect, useState } from "react";
import { getPokemones } from "../Services/ListPokemon";


export function usePokemones() {
  const [pokemones, setPokemones] = useState([]);

  const fetchPokemones = useCallback(async () => {
    try {
      const { results } = await getPokemones();
      setPokemones(results);
    } catch (error) {
      console.log(error.message);
    }
  }, [setPokemones]);

  useEffect(() => {
    fetchPokemones();
  }, [fetchPokemones]);

  return { pokemones, setPokemones, fetchPokemones };
}