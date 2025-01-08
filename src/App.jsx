import React, { useEffect } from "react";
import PublicRoutes from "./Routes/PublicRoutes/Publicroutes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../src/styles/global.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
	"pk_test_51KKMdhKIN0GTZliv0q0H30FvIABMVG8mivxDlnmkT4gaHbAMuWzf5KKUOlRrlNAwSrRcwukxLpmsdn1H3YD1p93m00FLcQNCOZ",
);
const App = () => {
	return (
		<>
			<Elements stripe={stripePromise}>
				<SkeletonTheme baseColor="#eee" highlightColor="#ddd">
					<PublicRoutes />
				</SkeletonTheme>
			</Elements>
		</>
	);
};

export default App;
