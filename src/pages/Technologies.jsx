import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Technologies () {

    useEffect(() => {
        document.body.classList.add('technology');
        return () => {
            document.body.classList.remove('technology')
        }
    }, [])

    return (
        <>
            <Outlet />
            <Navigate to="launch-vehicle" />
        </>
    )
}