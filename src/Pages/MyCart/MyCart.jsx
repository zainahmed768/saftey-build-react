import React, { useEffect, useState } from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import product_img from "../../assets/images/product_img.png";
import "../MyCart/MyCart.css";
import Footer from "../../layout/footer/Footerr";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Input } from "antd";
import CommanButton from "../../Components/CommanButton/CommanButton";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/reducers/CartReducer";
import { usePromoCodeMutation } from "../../redux/services/PaymentServices";
import Alert from "../../Components/SweetAlert/Alert";
import { setDiscount } from "../../redux/reducers/CartReducer";

const MyCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.CartReducer?.cart);
  const promoDiscount = useSelector(
    (state) => state?.CartReducer?.promoDiscount
  );
  const subTotal = useSelector((state) => state?.CartReducer?.subtotal);
  const [discount, setDiscounts] = useState(0);

  useEffect(() => {
    if (promoDiscount?.type) {
      if (promoDiscount.type === "fixed") {
        setDiscounts(promoDiscount.discount);
      } else {
        setDiscounts(Math.round((subtotal * promoDiscount.discount) / 100));
      }
    }
  }, [promoDiscount]);

  const { Group: InputGroup } = Input;
  const rating = 5;
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

  const [promoCode, setPromoCode] = useState("");
  console.log(promoCode, "promoCode");
  const [subtotal] = useState(312.21);
  // const [promoDiscount] = useState(20.0);
  const [total, setTotal] = useState(subtotal - promoDiscount);

  // PROMO CODE API CALL
  const [addPromoCode, response] = usePromoCodeMutation();

  const handleApplyCode = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("code", promoCode);
    addPromoCode(formData);
  };

  const handleRemoveCart = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    if (response?.isError) {
      Alert({
        title: "Error",
        text: response?.error?.data?.errors,
        iconStyle: "error",
      });
    }
  }, [response?.error]);

  useEffect(() => {
    if (response?.isSuccess) {
      console.log(response?.data, "asdjiud32");
      if (response?.data?.response?.data?.max_amount < subTotal) {
        Alert({
          title: "Success",
          text: response.data.message,
          iconStyle: "success",
        });

        dispatch(setDiscount(response?.data?.response?.data));
        setPromoCode("");
      } else {
        Alert({
          title: "Warning",
          text:
            "Cart Amount should be greater than " +
            response?.data?.response?.data?.max_amount,
          iconStyle: "warning",
        });
      }
    }
  }, [response?.isSuccess]);

  return (
    <>
      <PrimaryHeader
        pageTitle={"my cart"}
        pageDesc={
          "Stay Ahead of the Game with SafetyBuilt’s Site Safety Training Courses"
        }
      />
      {cart?.length < 1 ? (
        <div className="nothing">
          <div className="nothing-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-uppercase heading-font text-dark level-3-sm">
                  Cart is Empty
                </h2>
                <div className="nothing-btn-wrapper text-center">
                  <CommanButton
                    label={"Explore Courses"}
                    style={{ margin: "0px auto" }}
                    link={"/courses"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="site_width py-5">
          <div className="cart_container">
            <table className="table">
              <thead className="">
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th
                    scope="col"
                    className="heading-font level-5-sm text-uppercase leter-2 text-dark"
                  >
                    product
                  </th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th
                    scope="col"
                    className="heading-font level-5-sm text-uppercase leter-2 text-dark"
                  >
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((course) => {
                  return (
                    <tr>
                      <td colspan="2">
                        <div className="product_img">
                          <img
                            src={course?.course_img}
                            alt={course?.title}
                            className="img-fluid"
                          />
                        </div>
                      </td>
                      <td colspan="2">
                        <div className="my-auto">
                          <h2 className="bold-font level-6 text-capitalize">
                            {course?.title}
                          </h2>
                          <p className="med-font level-8 text-capitalize colo-dark">
                            {course?.short_des}
                          </p>
                          <p>
                            {renderStars(rating)}{" "}
                            <span className="level-9 bold-font text-uppercase">
                              4.9
                            </span>
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="my-auto">
                          <a onClick={(e) => handleRemoveCart(course?.id)}>
                            <span className="heading-font level-6 text-uppercase underline text-dark leter-2 remove_cart">
                              Remove
                            </span>
                          </a>
                        </div>
                      </td>
                      <td>
                        <div className="my-auto">
                          <h2 className="bold-font level-6 text-capitalize">
                            $ {course?.price}
                          </h2>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex justify-content-lg-start justify-content-center">
                <CommanButton label={"Buy more course"} link={"/courses"} />
              </div>
            </div>

            <div className="col-lg-4 offset-lg-2">
              <div className="cart_total_box">
                <h1 className="heading-font level-5-sm text-uppercase leter-1 text-white m-0">
                  Apply Promo Code
                </h1>

                <div className="input_otp">
                  <form onSubmit={handleApplyCode}>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button className="addCode" disabled={response?.isLoading}>
                      add code
                    </button>
                  </form>
                </div>

                <h1 className="heading-font level-5-sm text-uppercase leter-1 text-white mb-3">
                  Cart Totals
                </h1>

                <div className="row">
                  <div className="col-lg-8">
                    <p className="light-font level-7 text-capitalize leter-1 text-white">
                      Subtotal
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className="med-font level-7 text-capitalize leter-1 text-white">
                      ${subTotal}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8">
                    <p className="light-font level-7 text-capitalize leter-1 text-white">
                      Promo Code Discount
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className="med-font level-7 text-capitalize leter-1 text-white">
                      $ {subTotal < promoDiscount?.discount ? 0 : discount}
                    </p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-8">
                    <p className="light-font level-7 text-capitalize leter-1 text-white">
                      Total
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className="med-font level-7 text-capitalize leter-1 text-white">
                      $
                      {(subTotal < promoDiscount?.discount &&
                        subTotal - discount) ||
                        subTotal}
                    </p>
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
      )}

      <Footer />
    </>
  );
};

export default MyCart;
