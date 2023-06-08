import React, { useReducer } from 'react';
import { createContext } from "react"
import { authReducer } from './AuthReducer';

export interface AuthSate {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
}

// Estado inicial
export const authInitialState: AuthSate = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,

}

//Lo que expone el context

export interface AuthContextProps {
    authState: AuthSate;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logout: () => void;
    updateUserName: (name: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'})
    }
    
    const logout = () =>{
        dispatch({type: 'logout'})
    }
    const changeFavIcon = (iconName: string) =>{
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const updateUserName = (name: string) =>{
        dispatch({type: 'updateUsername', name})
    }
    return (
        <AuthContext.Provider value = {{
            authState,
            signIn,
            changeFavIcon,
            logout,
            updateUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}