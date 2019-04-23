import { URL_API} from "./api";

export function resumo() {
    return fetch(`${URL_API}/resumo`).then(result => result.json());
}