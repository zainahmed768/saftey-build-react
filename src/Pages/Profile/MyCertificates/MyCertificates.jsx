import React from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import CertificatesCard from "./CertificatesCard";
import { useCertificateStudentQuery } from "../../../redux/services/AuthServices";
import { useSelector } from "react-redux";

const MyCertificates = () => {
	const { data, refetch } = useCertificateStudentQuery();
	let certificate = data?.response?.data;
	console.log(data?.response?.data, "daj22");
	const user = useSelector((state) => state?.AuthReducer?.user);
	return (
		<>
			<ProfileLayout type={user?.role_name}>
				<div class="row">
					<div class="col-lg-6 col">
						<h2 class="level-3-sm student-heaing heading-font dark-color mt-3 mb-0 text-uppercase">
							mY certificates
						</h2>
						{/* <p>Nunc pellentesque libero et lore</p> */}
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<CertificatesCard certificate={certificate} refetch={refetch} />
					</div>
				</div>
			</ProfileLayout>
		</>
	);
};

export default MyCertificates;
