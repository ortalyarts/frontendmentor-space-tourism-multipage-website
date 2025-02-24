import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SubNavigation from './SubNavigation.jsx';
import MotionSlideIn from './MotionSlideIn.jsx';


export default function CrewContent ({items}){
    const params = useParams();
    const url = params.name.toLowerCase();
    const allCrew = items.crew;
    const currentItem = allCrew.find((item) => item.name.replace(/ /g,"-").toLowerCase().includes(url));

    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [currentItem])

    return(
        <>
            <MotionSlideIn  
            className='content-page-title'>
                <h1 className="text-preset-5"><span>02</span> Meet your crew</h1>
            </MotionSlideIn>
            
            <div className={`page-content page-content-crew ${isAnimating ? 'fade-in' : ''}`}>
            {/* <div className="page-content page-content-crew"> */}
                
                <div className="details-holder details-holder-crew">
                    <MotionSlideIn key={`sub-title-${url}`}>
                    <h2 className="text-preset-4">
                        {currentItem.role}
                        <br />
                        <span className='text-preset-3'>
                            {currentItem.name}
                        </span>
                        </h2>
                    </MotionSlideIn>
                    <p className="text-preset-9">
                        {currentItem.bio}
                    </p>
                    <SubNavigation items={items.crew} parentPage='crew' navClassName='nav-crew'/>
                </div>
                <div className='inner-shadow-holder'>
                    {/* <div className='inner-shadow'></div> */}
                    <img className='img-crew' src={`/src${currentItem.images.png}`} alt='moon' width="539" height="734"/>
                </div>
            </div>
        </>
    )
}