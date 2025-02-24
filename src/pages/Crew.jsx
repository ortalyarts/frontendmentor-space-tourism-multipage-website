import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Crew () {

    useEffect(() => {
        document.body.classList.add('crew');
        return () => {
            document.body.classList.remove('crew')
        }
    }, [])

    return (
        <>
            <Outlet />
            <Navigate to="douglas-hurley" />
        </>
    )
}