import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

interface ProtectedRouteType {
    component: any
}

function ProtectedRoute({ component }: ProtectedRouteType) {

    const isUser = localStorage.getItem('job-token');
    if (!isUser) {
        return <Navigate to="/sign-in" replace />;
    }
    
    return component

}
export default ProtectedRoute 