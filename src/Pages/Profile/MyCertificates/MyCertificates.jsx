import React from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CertificatesCard from "./CertificatesCard";

const MyCertificates = () => {
  return (
    <>
      <ProfileLayout type={"team leader"}>
        <div class="row">
          <div class="col-lg-6 col">
            <h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
              mY certificates
            </h2>
            <p>Nunc pellentesque libero et lore</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CertificatesCard />
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default MyCertificates;
