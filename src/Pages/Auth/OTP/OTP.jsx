import React from 'react'
import "../../Auth/AuthStyles.css"
import { Link } from 'react-router-dom'
import { Flex, Input, Typography } from 'antd';
import CommanButton from '../../../Components/CommanButton/CommanButton'
const { Title } = Typography;

const OTP = () => {
    const onChange = (text) => {
        console.log('OTP:', text);
    };
    const sharedProps = {
        onChange,
    };
    return (
        <>
            <section className='auth_section'>
                <div className="row">
                    <div className="col-lg-7 col-sm-12 p-lg-5 p-2">
                        <div className="auth_inner">
                            <h1 className='heading-font level-1 text-uppercase leter-1'>forgot password</h1>
                            <p className='med-font level-8 text-capitalize'>Enter Otp</p>
     
                            <div className="auth_fields_">
                                <div className="mb-3">
                                    <Flex gap="middle"  vertical>
                                        <Input.OTP formatter={(str) => str.toUpperCase()}  {...sharedProps}  length={5}/>
                                    </Flex>
                                </div>

                                <CommanButton
                                    label={"submit"}
                                    style={{ width: "100%" }}
                                    link={"/auth-change-password"}
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

export default OTP