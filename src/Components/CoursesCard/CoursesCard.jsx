import React, { useEffect, useState } from 'react'
import "../CoursesCard/CoursesCard.css"
import { FaStar } from 'react-icons/fa';

const CoursesCard = ({ onClick, img, label, title, price, rating, isActiveStar }) => {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    color={i <= rating ? "#F0BD08" : "#e4e5e9"}
                    size={13}
                />
            );
        }
        return stars;
    };
    const [activeStar, setActiveStar] = useState(false)

    useEffect(() => {
        setActiveStar(isActiveStar)
    }, [])

    console.log(activeStar, rating, "asdjasd")

    return (
        <>


            <div className="course_card" onClick={onClick} >
                <div className="course_card_img">
                    <img src={img} alt="product-img" title='product-image' className='img-fluid' />
                </div>
                <div className="card_body">
                    <div className="">
                        <p className='text-light level-8 reg-font line-clamp-1 line-clamp mb-0'>{label}  </p>
                    </div>
                    <div className="">
                        <h2 className='level-5-sm med-font text-uppercase line-clamp-2 line-clamp'>{title}</h2>
                    </div>
                    <hr />
                    {activeStar ?
                        <>

                            <div className="d-flex justify-content-between">
                                <p>{renderStars(rating)} <span className='level-9 bold-font text-uppercase'> {
                                    rating}
                                </span></p>
                                <p className='heading-font dark-color level-5'>{price}</p>
                            </div>
                        </>

                        :
                        <>
                            <div className="text-lg-end text-center">
                                <p className='heading-font dark-color level-5'>{price}</p>
                            </div> </>

                    }




                </div>
            </div>
        </>
    )
}

export default CoursesCard