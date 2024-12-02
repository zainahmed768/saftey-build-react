import React, { useState } from 'react'
import PrimaryHeader from '../../layout/Header/PrimaryHeader'
import product_img from "../../assets/images/product_img.png"
import '../MyCart/MyCart.css'
import Footer from '../../layout/footer/Footerr'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { Input } from 'antd';
import CommanButton from '../../Components/CommanButton/CommanButton'

const MyCart = () => {
    const { Group: InputGroup } = Input;
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

    const [promoCode, setPromoCode] = useState('');
    const [subtotal] = useState(312.21);
    const [promoDiscount] = useState(20.00);
    const [total, setTotal] = useState(subtotal - promoDiscount);

    const handleApplyCode = () => {
        // Logic for applying promo code and adjusting the total
        setTotal(subtotal - promoDiscount);
    };


    return (
        <>
            <PrimaryHeader
                pageTitle={"my cart"}
                pageDesc={"Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"}
            />

            <div className="site_width py-5">
                <div className="cart_container" >
                    <table class="table">
                        <thead className=''>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col" className='heading-font level-5-sm text-uppercase leter-2 text-dark'>product</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col" className='heading-font level-5-sm text-uppercase leter-2 text-dark'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td colspan="2">
                                    <div className="product_img">
                                        <img src={product_img} alt="" className='img-fluid' />
                                    </div>
                                </td>
                                <td colspan="2">
                                    <div className="my-auto">
                                        <h2 className='bold-font level-6 text-capitalize'>Version 3. Respirators And CPC Chapters</h2>
                                        <p className='med-font level-8 text-capitalize colo-dark'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti </p>
                                        <p>{renderStars(rating)} <span className='level-9 bold-font text-uppercase'>4.9
                                        </span></p>
                                    </div>
                                </td>
                                <td>
                                    <div className="my-auto">
                                        <Link to="" >
                                            <span className='heading-font level-6 text-uppercase underline text-dark leter-2'>
                                                Remove
                                            </span>
                                        </Link>

                                    </div>
                                </td>
                                <td>

                                    <div className="my-auto">
                                        <h2 className='bold-font level-6 text-capitalize'>$312.21</h2>

                                    </div>
                                </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td colspan="2">
                                    <div className="product_img">
                                        <img src={product_img} alt="" className='img-fluid' />
                                    </div>
                                </td>
                                <td colspan="2">
                                    <div className="my-auto">
                                        <h2 className='bold-font level-6 text-capitalize'>Version 3. Respirators And CPC Chapters</h2>
                                        <p className='med-font level-8 text-capitalize colo-dark'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti </p>
                                        <p>{renderStars(rating)} <span className='level-9 bold-font text-uppercase'>4.9
                                        </span></p>
                                    </div>
                                </td>
                                <td>
                                    <div className="my-auto">
                                        <Link to="" >
                                            <span className='heading-font level-6 text-uppercase underline text-dark leter-2'>
                                                Remove
                                            </span>
                                        </Link>

                                    </div>
                                </td>
                                <td>

                                    <div className="my-auto">
                                        <h2 className='bold-font level-6 text-capitalize'>$312.21</h2>

                                    </div>
                                </td>
                            </tr>
                        </tbody>

                        <tbody >
                            <tr>
                                <td colspan="2">
                                    <div className="product_img">
                                        <img src={product_img} alt="" className='img-fluid' />
                                    </div>
                                </td>
                                <td colspan="2">
                                    <div className="my-auto">
                                        <h2 className='bold-font level-6 text-capitalize'>Version 3. Respirators And CPC Chapters</h2>
                                        <p className='med-font level-8 text-capitalize colo-dark'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti </p>
                                        <p>{renderStars(rating)} <span className='level-9 bold-font text-uppercase'>4.9
                                        </span></p>
                                    </div>
                                </td>
                                <td>
                                    <div className="my-auto">
                                        <Link to="" >
                                            <span className='heading-font level-6 text-uppercase underline text-dark leter-2'>
                                                Remove
                                            </span>
                                        </Link>

                                    </div>
                                </td>
                                <td>

                                    <div className="my-auto">
                                        <h2 className='bold-font level-6 text-capitalize'>$312.21</h2>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-lg-start justify-content-center">
                            <CommanButton
                                label={"update cart"}
                            />
                        </div>
                    </div>


                    <div className="col-lg-4 offset-lg-2">
                        <div className="cart_total_box">

                            <h1 className='heading-font level-5-sm text-uppercase leter-1 text-white m-0'>Apply Promo Code</h1>

                            <div className="input_otp">
                                <input type="text" />
                                <button className='addCode'>
                                    add code
                                </button>
                            </div>


                            <h1 className='heading-font level-5-sm text-uppercase leter-1 text-white mb-3'>Cart Totals</h1>


                            <div className="row">
                                <div className="col-lg-8">
                                    <p className='light-font level-7 text-capitalize leter-1 text-white'>Subtotal</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='med-font level-7 text-capitalize leter-1 text-white'>$312.21</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-8">
                                    <p className='light-font level-7 text-capitalize leter-1 text-white'>Promo Code Discount</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='med-font level-7 text-capitalize leter-1 text-white'>$20.00</p>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-8">
                                    <p className='light-font level-7 text-capitalize leter-1 text-white'>Total</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='med-font level-7 text-capitalize leter-1 text-white'>$312.21</p>
                                </div>
                            </div>
                            <div className="w-100">

                                <CommanButton
                                    label={"Proceed to checkout"}
                                    className="proceedToCheckOut"
                                    link={"/check-out"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default MyCart