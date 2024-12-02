import React, { useState } from 'react'
import Logo from "../../assets/images/logo.png"
import admin from "../../assets/images/admin-icon.png"
import menuBar from "../../assets/images/menu.png"
import { Drawer, Menu } from 'antd';
import cart_menu from "../../assets/images/cart_menu.png"
import { Link } from 'react-router-dom';
const Header = () => {


    const { Item } = Menu;
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <section >

                <div className="container">
                    <div className="navbar_sec ">
                        <div className="logo_img">
                            <img src={Logo} title="Logo" alt="Logo" />
                        </div>



                        <div className="menu_right_side">
                            <div className="menu_img">

                                <img src={menuBar} title="menu-image" alt="menu" onClick={showDrawer} />
                            </div>
                            <div className="admin_img">
                                <Link to="/my-profile">
                                    <img
                                        src={admin}
                                        title="admin-image"
                                        alt="admin"
                                    />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section >


            <Drawer
                placement="top"
                onClose={onClose}
                visible={visible}
                className="fullscreen-drawer main-header-mobile"
                closable={true}
                width="100%"  // Full screen width
            >

                <ul>
                    <li> <Link to="/" className='text-primary'>  Home</Link> </li>
                    <li> <Link to="/about-us"> about </Link> </li>
                    <li> <Link to="/courses"> courses </Link>  </li>
                    <li> <Link to="/"> wishlist </Link>  </li>
                    <li> <Link to="/contact-us"> contact us </Link>  </li>

                    <br />
                    <li> <Link to="/my-cart"> cart  <span><img src={cart_menu} alt="" /></span></Link> </li>
                    <li> <Link to="/sign-in" className='text-primary'>  sign in   </Link> | <Link to="/sign-up">  Create an account   </Link> </li>
                </ul>
            </Drawer>
        </>
    )
}

export default Header;