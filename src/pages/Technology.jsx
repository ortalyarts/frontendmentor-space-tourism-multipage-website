import {Suspense} from 'react'
import { useLoaderData, Await } from 'react-router-dom';

import TechnologyContent from '../components/TechnologyContent.jsx';

export default function Technology (){
    const data = useLoaderData();
    const content = data.content;
    
    return (
        <>   
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={content}>
                {(loadedContent) => 
                    <TechnologyContent items={loadedContent} />                            
                }
            </Await>
            </Suspense>
        </>
    )
}

