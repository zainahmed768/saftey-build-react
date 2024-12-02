import React, { useState } from 'react'
import "../../Auth/AuthStyles.css"
import { Link } from 'react-router-dom'
import { Checkbox } from 'antd'
import CommanButton from '../../../Components/CommanButton/CommanButton'
import { Segmented } from 'antd';

const Signup = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const [selectedRole, setSelectedRole] = useState('TEAM LEADER');

    return (
        <>
            <section className='auth_section'>

                <div className="row">
                    <div className="col-lg-7 col-sm-12 p-lg-5 p-2">
                        <div className="auth_inner">
                            <h1 className='heading-font level-1 text-uppercase leter-1 mb-lg-0'>sign up </h1>
                            <p className='reg-font level-7 text-capitalize mb-lg-2'>Already A Member ?
                                <Link to="/sign-in" className='bold-font level-7 text-capitalize text-decoration-none dark-color'> Sign In</Link>
                            </p>
                            <Segmented
                                options={['TEAM LEADER', 'STUDENT']}
                                value={selectedRole}
                                onChange={(value) => setSelectedRole(value)}
                                block
                                style={{
                                    marginBottom: 20,
                                    maxWidth: '220px',
                                    margin: '0',
                                    fontWeight: 'bold',
                                    background: 'white',
                                    border: "1px solid black",

                                }}
                            />


                            {selectedRole === 'TEAM LEADER' && <>



                                <div className="auth_fields_">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className='med-font level-8 text-capitalize mb-1'>First Name</label>
                                                <input type="text" name="" id="" className='form-control-1' />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className='med-font level-8 text-capitalize mb-1'>Last Name</label>
                                                <input type="text" name="" id="" className='form-control-1' />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className='med-font level-8 text-capitalize mb-1'>Email Address</label>
                                                <input type="email" name="" id="" className='form-control-1' />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <label className='med-font level-8 text-capitalize mb-1'>Contact Number </label>
                                            <input type="number" name="" id="" className='form-control-1' />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className='med-font level-8 text-capitalize mb-1'>Company Name</label>
                                                <input type="text" name="" id="" className='form-control-1' />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className='med-font level-8 text-capitalize mb-1'>Password</label>
                                            <input type="password" name="" id="" className='form-control-1' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className='med-font level-8 text-capitalize mb-1'>Confirm New Password</label>
                                            <input type="password" name="" id="" className='form-control-1' />
                                        </div>
                                    </div>

                                    <CommanButton
                                        label={"sign up"}
                                        style={{ width: "100%" }}
                                        link={"/sign-in"}
                                    />

                                </div>

                            </>}
                            {selectedRole === 'STUDENT' && <>
                                <div className="auth_fields_">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className='med-font level-8 text-capitalize mb-1'>First Name</label>
                                                <input type="text" name="" id="" className='form-control-1' />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className='med-font level-8 text-capitalize mb-1'>Last Name</label>
                                                <input type="text" name="" id="" className='form-control-1' />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className='med-font level-8 text-capitalize mb-1'>Email Address</label>
                                                <input type="email" name="" id="" className='form-control-1' />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <label className='med-font level-8 text-capitalize mb-1'>Contact Number </label>
                                            <input type="number" name="" id="" className='form-control-1' />
                                        </div>
                                        

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className='med-font level-8 text-capitalize mb-1'>Password</label>
                                            <input type="password" name="" id="" className='form-control-1' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className='med-font level-8 text-capitalize mb-1'>Confirm New Password</label>
                                            <input type="password" name="" id="" className='form-control-1' />
                                        </div>
                                    </div>

                                    <CommanButton
                                        label={"sign up"}
                                        style={{ width: "100%" }}
                                    />

                                </div>
                            </>}
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

export default Signup;