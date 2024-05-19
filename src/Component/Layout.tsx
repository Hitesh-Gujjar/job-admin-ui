import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
    children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
           <Outlet/>
        </>
    );
}

export default Layout;