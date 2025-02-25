import { useParams } from 'react-router-dom';
import SubNavigation from './SubNavigation.jsx';
import MotionSlideIn from './MotionSlideIn.jsx';


export default function DestinationContent ({items}){
    const params = useParams();
    const url = params.destination.toLowerCase();
    const allDestinations = items.destinations;
    const currentDestination = allDestinations.find((item) => item.name.toLowerCase().includes(url));

    return(
        <>
            <MotionSlideIn className='content-page-title'>
                <h1 className="text-preset-5"><span>01</span> Pick your destination</h1>
            </MotionSlideIn>
            <div className="page-content page-content-destination">
                <div key={url} className="content-left">
                    <img className='img-destination fade-in' src={`${currentDestination.images.webp}`} alt='moon' width="480" height="480"/>
                </div>
                <div 
                    className="details-holder">
                    <SubNavigation items={items.destinations} parentPage='destinations' navClassName='nav-destinations'/>
                    <MotionSlideIn key={`sub-title-${url}`}><h2 className="title-2">{currentDestination.name}</h2></MotionSlideIn>
                    <p className="text-preset-9">
                        {currentDestination.description}
                    </p>
                    <div className='line'></div>
                    <div className='cols-2'>
                        <div>
                            <p className='text-preset-7'>  
                                Avg. distance
                            </p>
                            <p className='text-preset-6'>
                                {currentDestination.distance}                           
                            </p>
                        </div>
                        <div>
                            <p className='text-preset-7'>
                                Est. travel time
                            </p>
                            <p className='text-preset-6'>
                                {currentDestination.travel}
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}