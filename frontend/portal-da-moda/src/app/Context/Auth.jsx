import React from 'react';
import { useState } from 'react';

const AuthContext = React.createContext({});

function AuthProvider(props) {
    let isLogado = localStorage.getItem('logado');

    const [usuarioLogado, setUsuarioLogado] = useState(isLogado === "S" ? true : false);

    return (
        <AuthContext.Provider value={{usuarioLogado, setUsuarioLogado}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
