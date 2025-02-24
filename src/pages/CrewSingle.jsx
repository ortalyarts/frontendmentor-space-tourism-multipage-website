import {Suspense} from 'react'
import { useLoaderData, Await, useParams } from 'react-router-dom';

import CrewContent from '../components/CrewContent.jsx';

export default function CrewSingle (){
    const data = useLoaderData();
    const content = data.content;

    const params = useParams();
    const url = params.name.toLowerCase();
    
    return (
        <>   
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={content}>
                {(loadedContent) => 
                    // <CrewContent key={url} items={loadedContent} />
                    <CrewContent items={loadedContent} />                            
                }
            </Await>
            </Suspense>
        </>
    )
}

