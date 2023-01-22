import React from "react";
import { IoIosArrowForward } from 'react-icons/io';
import './Slider3.css';

const ReactCardSlider1=()=>{
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
                <h2 className='ProductSection3'>Order <span style={{color: '#008ECC'}}>Now!</span></h2>
                <h2 className='ViewAll'>View All<IoIosArrowForward className='arrowViewAll'/></h2>
            </div>
            <div className="SliderContainer1">
                <div className="slider1">
                   { slides.map((slide,index)=>{
                        return (
                            <div className="sliderCard1" key={index}>
                                <div className="sliderCardImage1" style={{backgroundImage:`url(${slide.image})`}}>
                                </div>
                                <p className="Title">Card Title</p>
                                <p className="Description">Card Description</p>
                            </div>
                        )
                     })
                   } 
                </div>
            </div>
        </div>
    )

}

export default ReactCardSlider1;