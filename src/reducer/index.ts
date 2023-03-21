import { USER_LOGIN } from "./types";

const initialState = {
    user: {
        token: ''
    }
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload.user
            };
        default:
        return state;
    }
};
