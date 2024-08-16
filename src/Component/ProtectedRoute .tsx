import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../Comman/Comman';

interface ProtectedRouteType {
    component: any
}

function ProtectedRoute({ component }: ProtectedRouteType) {

    const isUser = getLocalStorage();
    if (!isUser.token) {
        return <Navigate to="/sign-in" replace />;
    }

    return component

}
export default ProtectedRoute 