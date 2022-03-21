import { api, } from "../config";

const signIn = (user) => {
    return api({
        method: "POST",
        url: "/adm/session",
        data: user,
    })
}
export { signIn };