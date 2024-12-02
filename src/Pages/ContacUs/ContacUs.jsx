import React from 'react'
import PrimaryHeader from '../../layout/Header/PrimaryHeader'
import "../ContacUs/ContacUs.css"
import { Divider } from 'antd'
import CommanButton from '../../Components/CommanButton/CommanButton'
import Footer from '../../layout/footer/Footerr'
const ContacUs = () => {
    return (
        <>
            <PrimaryHeader
                pageTitle={"CONTACT US"}
                pageDesc={"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"}
            />

            <div className="py-5 site_width">

                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="light_gray_box">
                            <div className="">
                                <h3 className='heading-font level-5-md text-uppercase dark-color leter-2'>
                                    Contact Information
                                </h3>
                                <p className='reg-font level-8 color-dark'>e eu tincidunt tortor aliquam nulla facilisi cras. Mauris sit amet massa vitae tortor condimentum lacinia. </p>

                                <Divider style={{ borderColor: 'rgb(0 0 0 / 32%)' }} />
                            </div>

                            <div className="">
                                <h3 className='heading-font level-5-md text-uppercase dark-color leter-2'>
                                    Office
                                </h3>
                                <p className='reg-font level-8 color-dark'>e eu tincidunt tortor aliquam nulla facilisi cras. Mauris sit amet massa vitae tortor condimentum lacinia. </p>

                                <Divider style={{ borderColor: 'rgb(0 0 0 / 32%)' }} />
                            </div>

                            <div className="">
                                <h3 className='heading-font level-5-md text-uppercase dark-color leter-2'>
                                    Management
                                </h3>
                                <p className='reg-font level-8 color-dark'>e eu tincidunt tortor aliquam nulla facilisi cras. Mauris sit amet massa vitae tortor condimentum lacinia. </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-7 mx-3 py-3">
                        <div className="row">
                            <h1 className='heading-font level-4 text-uppercase dark-color leter-1'>leave us a message</h1>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>First Name</label>
                                    <input type="text" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>Last Name</label>
                                    <input type="text" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>Phone</label>
                                    <input type="number" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <label className='med-font level-9 text-capitalize mb-1'>Email Address  </label>
                                <input type="email" name="" id="" className='form-control-1' />
                            </div>


                            <div class="col-lg-12">
                                <label className='med-font level-9 text-capitalize mb-1'>Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>



                            <div className="d-flex justify-content-lg-end justify-content-center py-3">
                                <CommanButton label={"Submit"} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default ContacUs