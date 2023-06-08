import { AuthSate } from "./AuthContext";

type AuthAction = 
    | { type: 'signIn'} 
    | { type: 'logout'} 
    | { type: 'changeFavIcon', payload: string}
    | { type: 'updateUsername', name: string};

export const authReducer = ( state: AuthSate, action: AuthAction ): AuthSate => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        
        case 'updateUsername':
        return {
            ...state,
            username: action.name,
        }
    
        default:
            return state;

    }
}