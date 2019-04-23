import { URL_API} from "./api";

export function consultas() {
    return fetch(`${URL_API}/consultas`).then(result => result.json());
}