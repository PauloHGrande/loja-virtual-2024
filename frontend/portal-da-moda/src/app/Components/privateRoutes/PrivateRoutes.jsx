
import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';

const PrivateRoutes = () => {

    const {usuarioLogado} = useContext(AuthContext);
    console.log(usuarioLogado);
    return(
        usuarioLogado ? <Outlet/> : <Navigate to="/app" />
    )
}

export default PrivateRoutes
