import React from "react";
import PrimaryHeader from "../../layout/Header/PrimaryHeader";
import Footer from "../../layout/footer/Footerr";
import { usePagesQuery } from "../../redux/services/SiteSettingServices";
import { Skeleton } from "antd";

const PrivacyPolicy = () => {
  const { data: termsContent, isLoading } = usePagesQuery("privacy-policy");
  let termpage = termsContent?.response?.data;
  return (
    <>
      <PrimaryHeader
        pageTitle={termpage?.page_title}
        pageDesc={termpage?.page_subtitle}
      />
      {isLoading ? (
        <div className="container">
          <div className="loading-wrapper p-5">
            <Skeleton rows={10} width={10} />
          </div>
        </div>
      ) : (
        <div
          className="py-5 site_width"
          dangerouslySetInnerHTML={{ __html: termpage?.content }}
        ></div>
      )}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
