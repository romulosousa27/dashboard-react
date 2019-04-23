import { URL_API} from "./api";

export function faturamento() {
    return fetch(`${URL_API}/faturamento`).then(result => result.json());
}