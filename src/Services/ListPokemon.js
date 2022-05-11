import {API} from "./api"

export const getPokemones = () => {
    return API.get("api/?results=10&seed=abc");
}