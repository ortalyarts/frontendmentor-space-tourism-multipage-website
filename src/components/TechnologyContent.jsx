import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SubNavigation from './SubNavigation.jsx';
import MotionSlideIn from './MotionSlideIn.jsx';

export default function TechnologyContent ({items}){
    const params = useParams();
    const url = params.name.toLowerCase();
    const allTechs = items.technology;
    const currentItem = allTechs.find((item) => item.name.replace(/ /g,"-").toLowerCase().includes(url));

    const[width, setWidth] = useState(window.innerWidth);
    const[imgSrc, setImgSrc] = useState({});
    
    // Switching images between lanscape / portrait for mobile / desktop
    useEffect(() => {
                window.addEventListener("resize", handleResize);
                
                if(width <= 1439){
                    setImgSrc({src: `/src${currentItem.images.landscape}`, width: 768, height: 357})
                }
                else{
                    // setImgSrc(`/src${currentItem.images.portrait}`)
                    setImgSrc({src: `/src${currentItem.images.portrait}`, width: 608, height: 600})
                }
                return () => {
                    window.removeEventListener("resize", handleResize)
                }
                
            }, [width, currentItem])
    
    function handleResize(){
                setWidth(window.innerWidth)
            }
    

    return(
        <>
            <MotionSlideIn className='content-page-title'>
                <h1 className="text-preset-5"><span>03</span> Space launch 101</h1>
            </MotionSlideIn>
            <div className="page-content page-content-tech">
                <div className="details-holder details-holder-tech">
                    <SubNavigation items={items.technology} parentPage='technology' navClassName='nav-technology rounded-list'/>
                    <div className='description-holder'>
                        <h1 className="text-preset-4">
                            The terminology
                            <br />
                            <span className='text-preset-3'>
                                {currentItem.name}
                            </span>
                            </h1>
                            <div>
                                <p className="text-preset-9">
                                    {currentItem.description}
                                </p>
                            </div>
                    </div>                    
                </div>
                    <img className='img-technology fade-in' src={imgSrc.src} alt='rocket' width={imgSrc.width} height={imgSrc.height}/>
            </div>
        </>
    )
}

