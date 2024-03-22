import React, { useState } from 'react';
import './Home.scss';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import prod1 from '../../assets/images/img1.jpg';
import prod2 from '../../assets/images/img2.jpg';
import prod3 from '../../assets/images/img3.jpg';
import prod4 from '../../assets/images/img4.jpg';
import prod5 from '../../assets/images/img5.jpg';
import prod6 from '../../assets/images/img6.jpg';
import prod7 from '../../assets/images/img7.jpg';
import prod8 from '../../assets/images/img8.jpg';
import prod9 from '../../assets/images/img9.jpg';
import prod10 from '../../assets/images/img10.jpg';

const Home = () => {
    const content = {
        img: [
            { id: 1, img: prod1 },
            { id: 2, img: prod2 },
            { id: 3, img: prod3 },
            { id: 4, img: prod4 },
            { id: 5, img: prod5 },
            { id: 6, img: prod6 },
            { id: 7, img: prod7 },
            { id: 8, img: prod8 },
            { id: 9, img: prod9 },
            { id: 10, img: prod10 },
        ],
    };

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === content.img.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? content.img.length - 1 : prevIndex - 1));
    };

    return (
        <div className="HomeMainDiv">
            <div className="heading">
                <h1>Photo Gallery</h1>
            </div>
            <div className="gallery">
                <div className="imagesList">
                    <div className="container-fluid">
                        <div className="row">
                            {content.img.map((data, index) => (
                                <div className="col-lg-3" key={index}>
                                    <img
                                        src={data.img}
                                        alt=""
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                More Items
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="" className="carousell" style={{ zIndex: 1050 }}>
                                <div className="carousel-inner">
                                    {content.img.map((data, index) => (
                                        <div key={index} className={`carousel-item ${index === selectedImageIndex ? 'active' : ''}`}>
                                            <img src={data.img} className="d-block w-100" id="CrousImg" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="thumbnails">
                               
                                {content.img.map((data, index) => (
                                    <img
                                        key={index}
                                        src={data.img}
                                        className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                                        style={{ transform: index === selectedImageIndex ? 'scale(1.2)' : 'scale(1)' }}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                                
                            </div>
                            <div className="btns">
                                <MdOutlineKeyboardArrowLeft className='arrowIcon' onClick={handlePrev}/>
                                <MdOutlineKeyboardArrowRight className='arrowIcon' onClick={handleNext}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
