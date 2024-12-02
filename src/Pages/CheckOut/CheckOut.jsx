import React from 'react'
import PrimaryHeader from '../../layout/Header/PrimaryHeader'
import "../CheckOut/CheckOut.css"
import { Checkbox, Divider } from 'antd'
import CommanButton from '../../Components/CommanButton/CommanButton'
import checkout_product from "../../assets/images/checkout_product.png"
import { FaStar } from 'react-icons/fa'
import Footer from '../../layout/footer/Footerr'
const CheckOut = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const rating = 5
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    color={i <= rating ? "#F0BD08" : "#e4e5e9"}
                    size={13}
                    style={{ margin: 3 }}
                />
            );
        }
        return stars;
    };
    return (
        <>
            <PrimaryHeader
                pageTitle={"checkout"}
                pageDesc={"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"}
            />


            <div className="site_width py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <h1 className='heading-font level-4 text-uppercase dark-color leter-1'>Billing information</h1>
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
                            <div className="col-lg-12">
                                <label className='med-font level-9 text-capitalize mb-1'>Address Line 1 </label>
                                <input type="text" name="" id="" className='form-control-1' />
                            </div>

                            <div className="col-lg-12">
                                <label className='med-font level-9 text-capitalize mb-1'>Address Line 1 </label>
                                <input type="text" name="" id="" className='form-control-1' />
                            </div>


                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>City</label>
                                    <input type="text" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>Country</label>
                                    <input type="text" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>State</label>
                                    <input type="text" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <label className='med-font level-9 text-capitalize mb-1'>Postcode</label>
                                <input type="number" name="" id="" className='form-control-1' />
                            </div>

                            <div class="col-lg-12">
                                <label className='med-font level-9 text-capitalize mb-1'>Additional Information</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>


                        </div>



                        <div className="row">
                            <div className="pt-4">
                                <h1 className='heading-font level-4 text-uppercase dark-color leter-1'>Payment Details</h1>

                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>Card Number</label>
                                    <input type="number" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9 text-capitalize mb-1'>MM / YY</label>
                                    <input type="date" name="" id="" className='form-control-1' />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className='med-font level-9  text-uppercase mb-1'>cvv</label>
                                    <input type="number" name="" id="" className='form-control-1' />
                                </div>
                            </div>


                        </div>

                        <div className="">
                            <p className='pt-3'>
                                <Checkbox onChange={onChange} className='med-font level-8 text-capitalize'>Nam massa dolor, imperdiet sed ante eget, luctus gravida ipsum lobortis eu. Donec id </Checkbox>
                            </p>
                        </div>

                        <Divider />

                        <div className="d-flex justify-content-lg-end justify-content-center">
                            <CommanButton label={"Confirm payment"} link={'/my-profile'} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gray_back_box">

                            <h1 className='heading-font level-5-md text-uppercase leter-1 mb-4 color-dark'>course information</h1>
                            <img src={checkout_product} className='img-fluid' alt="product" title='prodcut' />

                            <h1 className='bold-font level-6 text-capitalize mt-3'>Version 3. Respirators And CPC Chapters</h1>

                            <p className='semi-b-font  level-8 text-capitalize'>{renderStars(rating)} 4.9</p>

                            <p className='med-font  level-8 text-capitalize color-dark'>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            </p>
                        </div>

                        <div className="dark_gray_box">

                            <h1 className='heading-font level-5-sm text-uppercase leter-1 mb-4 text-white'>Cart Totals</h1>

                            <div className="row">
                                <div className="col-lg-8">
                                    <p className='light-font level-7 text-capitalize leter-1 text-white'>Promo Code Discount</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='med-font level-7 text-capitalize leter-1 text-white'>$20.00</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-8">
                                    <p className='light-font level-7 text-capitalize leter-1 text-white'>Subtotal</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='med-font level-7 text-capitalize leter-1 text-white'>$312.21</p>
                                </div>
                            </div>


                            <Divider style={{  borderColor: 'rgb(255 255 255 / 15%)' }}/>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p className='light-font level-7 text-capitalize leter-1 text-white'>Total</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='med-font level-7 text-capitalize leter-1 text-white'>$312.21</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default CheckOut