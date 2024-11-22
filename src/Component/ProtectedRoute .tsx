import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../Comman/Comman';
import { callGetApi } from '../asset/axios/axiosApi';

interface ProtectedRouteType {
    component: any
}

function ProtectedRoute({ component }: ProtectedRouteType) {
    const navigate = useNavigate();
    useEffect(() => {
        const veryfyToken = () => {
            const isValid: any = callGetApi({ url: 'user/validateToken' });

            if (isValid?.status === false) {
                navigate('/sign-in');
            }
        }

        veryfyToken();

    }, [])


    const isUser = getLocalStorage();
    if (!isUser) {
        return <Navigate to="/sign-in" replace />;
    }

    return component

}
export default ProtectedRoute 