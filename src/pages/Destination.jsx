import {Suspense} from 'react'
import { useLoaderData, Await } from 'react-router-dom';

import DestinationContent from '../components/DestinationContent.jsx';

export default function Destination (){
    const data = useLoaderData();
    const content = data.content;
    
    return (
        <>   
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={content}>
                {(loadedContent) => 
                    <DestinationContent items={loadedContent} />                            
                }
            </Await>
            </Suspense>
        </>
    )
}

