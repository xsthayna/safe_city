import { USER_LOGIN } from "./types";

export const login = (value:any) => ({
    type: USER_LOGIN,
    payload: {
        user: value
    }
});