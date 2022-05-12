import {API} from "../Interceptors/api"

export const getPokemones = () => {
    return API.get("/api/v2/pokemon");
}