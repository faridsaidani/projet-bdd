import React from "react";
import { IoIosArrowForward } from 'react-icons/io';
import './Slider2.css';

const ReactCardSlider=()=>{
    const slides=[{image:'https://picsum.photos/200/300'},
                  {image:'https://picsum.photos/400/500'},
                  {image:'https://picsum.photos/600/700'},
                  {image:'https://picsum.photos/800/900'},
                  {image:'https://picsum.photos/400/300'},
                  {image:'https://picsum.photos/100/300'}
                 ];
    return (
        <div>
            <div className="side-by-side">
                <h2 className='ProductSection2'>Top <span style={{color: '#008ECC'}}>Electronics Brands</span></h2>
                <h2 className='ViewAll'>View All<IoIosArrowForward className='arrowViewAll'/></h2>
            </div>
            <div className="SliderContainer">
                <div className="slider">
                   { slides.map((slide,index)=>{
                        return (
                            <div className="sliderCard" key={index}>
                                <div className="sliderCardImage" style={{backgroundImage:`url(${slide.image})`}}>

                                </div>
                            </div>
                        )
                     })
                   } 
                </div>
            </div>
        </div>
    )

}

export default ReactCardSlider;