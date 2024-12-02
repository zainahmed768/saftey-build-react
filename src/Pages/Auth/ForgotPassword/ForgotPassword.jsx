import React from 'react'
import "../../Auth/AuthStyles.css"
import { Link } from 'react-router-dom'
import { Checkbox } from 'antd'
import CommanButton from '../../../Components/CommanButton/CommanButton'

const ForgotPassword = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <>
            <section className='auth_section'>

                <div className="row">
                    <div className="col-lg-7 col-sm-12 p-lg-5 p-2">
                        <div className="auth_inner">
                            <h1 className='heading-font level-1 text-uppercase leter-1'>forgot password</h1>
                            <p className='med-font level-8 text-capitalize'>An  OTP will be sent to your email</p>
                            <p className='reg-font level-7 text-capitalize'>Haven’t recieved a code yet ?
                                <Link to="/sign-up" className='bold-font level-7 text-capitalize text-decoration-none dark-color'> Send Again</Link>
                            </p>

                            <div className="auth_fields_">
                                <div className="mb-3">
                                    <label className='med-font level-8 text-capitalize mb-1'>Email</label>
                                    <input type="email" name="" id="" className='form-control-1' />
                                </div>

                                <CommanButton
                                    label={"submit"}
                                    style={{ width: "100%" }}
                                    link={"/otp"}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="auth_banner">

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default ForgotPassword