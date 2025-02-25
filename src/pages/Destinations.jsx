import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Destinations () {

    useEffect(() => {
        document.body.classList.add('destinations');
        return () => {
            document.body.classList.remove('destinations')
        }
    }, [])

    return (
        <>
            
            <Outlet />
            <Navigate to="moon"  />
        </>
    )
}


// Getting content
async function loadContent() {
    const response = await fetch('../data/data.json');
  
    if (!response.ok) {
      throw new Response(JSON.stringify({ message: 'Could not fetch destinations.' }), {
        status: 500,
      });
    } else {
      const resData = await response.json();
    //   return resData.events;
        return resData;

    }
  }
  export async function loader({ request, params }) {
    // const id = params.eventId;
  
    return {
    //   event: await loadEvent(id),
      content: loadContent(),
    };
  }
