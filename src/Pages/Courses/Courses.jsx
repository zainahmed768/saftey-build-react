import React, { useState } from 'react'
import PrimaryHeader from '../../layout/Header/PrimaryHeader'
import search_icon from "../../assets/images/search_icon.png"
import box_icon from "../../assets/images/box_icon.svg"
import dots_bar from "../../assets/images/3_dots_bar.svg"
import "../Courses/Courses.css"
import { FeaturedCourses } from '../../data'
import CoursesCard from '../../Components/CoursesCard/CoursesCard'
import { Pagination } from 'antd'
import { useNavigate } from 'react-router-dom';
import Footer from '../../layout/footer/Footerr'

const Courses = () => {
    const navigate = useNavigate();

    const [current, setCurrent] = useState(3);
    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };
    const onClick = () => {
        navigate('/course-details');
     

    }
    return (
        <>
            <PrimaryHeader
                pageTitle={"courses"}
                pageDesc={"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"}
            />

            <section>
                <div className="site_width py-5" >
                    <div className="row">
                        <div className="col-lg-6 ">
                            <label htmlFor="" className='med-font   color-dark level-8 text-capitalize mb-1'>Search Here</label>
                            <div className="position-relative">
                                <input type="text" className='form-control-1' placeholder='Search your keyword here' />
                                <span className='search_box'>
                                    <img src={search_icon} alt="" />
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-2 p-lg-0">

                            <label htmlFor="" className='med-font  color-dark level-8 text-capitalize mb-1'>Sort By</label>
                            <select class="form-select-1" required="true" aria-required="true">
                                <option value="active">Release date</option>
                                <option value="no access">No access</option>
                            </select>
                        </div>
                        <div className="col-lg-1 my-auto">
                            <label htmlFor="" className='med-font  color-dark level-8 text-capitalize mb-3'></label>

                            <div className="yellow_box">

                                <img src={box_icon} alt="" className='img-fluid' />
                            </div>
                        </div>

                        <div className="col-lg-1 my-auto">
                            <label htmlFor="" className='med-font  color-dark level-8 text-capitalize mb-3'></label>

                            <div className="dots_bar">

                                <img src={dots_bar} alt="" className='img-fluid' />
                            </div>

                        </div>
                    </div>

                    <div className="py-3">
                        <div className="row">
                            {FeaturedCourses?.map((item, key) => (

                                <div className="col-lg-4"  key={key}>
                                    <CoursesCard
                                       
                                        onClick={onClick}
                                        img={item?.image}
                                        label={item?.label}
                                        title={item?.title}
                                        price={item?.price}
                                        rating={'4.9'}
                                        isActiveStar={true}
                                    />

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Pagination current={current} onChange={onChange} total={50} />                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Courses