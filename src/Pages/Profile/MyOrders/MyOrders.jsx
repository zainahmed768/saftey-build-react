import React from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { myorderImg } from "../../../constant";
import "../MyOrders/MyOrder.css";

const MyOrders = () => {
  return (
    <>
      <ProfileLayout type={"team leader"}>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="level-3-sm heading-font dark-color mt-3 mb-0 text-uppercase">
              My Orders
            </h2>
            <p>Nunc pellentesque libero et lore</p>
          </div>
        </div>

        <div className="table-responsive">
          {/* <table className="my__orders-table w-100"> */}
          <table className="order-table w-100">
            <thead>
              <tr>
                <th className="level-5 primary-bold-font order-img-col dark-color uppercase mt-2 text-center"></th>
                <th className="level-5 primary-bold-font order-no-col dark-color uppercase mt-2 text-center pb-2">
                  oRDER NUMBER
                </th>
                <th className="level-5 primary-bold-font dark-color uppercase mt-2 text-center dated-col pb-2">
                  Dated
                </th>
                <th className="level-5 primary-bold-font dark-color uppercase mt-2 text-center amount-col pb-2">
                  TOTAL AMOUNT
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="light-bg-div p-0 border-1 my-3">
                <td className="py-md-1 py-2">
                  <div className="d-flex align-items-center p-2 product-wrapper justify-content-around">
                    <div className="my-order-product-img">
                      <img
                        src={myorderImg}
                        alt="my-order-product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="ms-lg-3">
                      <span className="level-6 secondary-regular-font dark-color text-center m-0">
                        Version 3. Respirators And CPC Chapters
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 order-no">
                    126578978
                  </p>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 dated">
                    23 June 2023
                  </p>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 price">
                    $200.00
                  </p>
                </td>
              </tr>
              <tr className="light-bg-div p-0 border-1 my-3">
                <td className="py-md-1 py-2 img-inner">
                  <div className="d-flex align-items-center p-2 product-wrapper justify-content-around">
                    <div className="my-order-product-img">
                      <img
                        src={myorderImg}
                        alt="my-order-product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="ms-lg-3">
                      <span className="level-6 secondary-regular-font dark-color text-center m-0">
                        Version 3. Respirators And CPC Chapters
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-md-1 py-2 number-inner">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 order-no">
                    126578978
                  </p>
                </td>
                <td className="py-md-1 py-2 date-inner">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 dated">
                    23 June 2023
                  </p>
                </td>
                <td className="py-md-1 py-2 amount-inner">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 price">
                    $200.00
                  </p>
                </td>
              </tr>
              <tr className="light-bg-div p-0 border-1 my-3">
                <td className="py-md-1 py-2">
                  <div className="d-flex align-items-center p-2 product-wrapper justify-content-around">
                    <div className="my-order-product-img">
                      <img
                        src={myorderImg}
                        alt="my-order-product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="ms-lg-3">
                      <span className="level-6 secondary-regular-font dark-color text-center m-0">
                        Version 3. Respirators And CPC Chapters
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 order-no">
                    126578978
                  </p>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 dated">
                    23 June 2023
                  </p>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 price">
                    $200.00
                  </p>
                </td>
              </tr>
              <tr className="light-bg-div p-0 border-1 my-3">
                <td className="py-md-1 py-2">
                  <div className="d-flex align-items-center p-2 product-wrapper justify-content-around">
                    <div className="my-order-product-img">
                      <img
                        src={myorderImg}
                        alt="my-order-product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="ms-lg-3">
                      <span className="level-6 secondary-regular-font dark-color text-center m-0">
                        Version 3. Respirators And CPC Chapters
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 order-no">
                    126578978
                  </p>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 dated">
                    23 June 2023
                  </p>
                </td>
                <td className="py-md-1 py-2">
                  <p className="level-6 secondary-regular-font dark-color text-center m-0 price">
                    $200.00
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProfileLayout>
    </>
  );
};

export default MyOrders;
