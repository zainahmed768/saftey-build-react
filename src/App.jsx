import React, { useEffect } from "react";
import PublicRoutes from "./Routes/PublicRoutes/Publicroutes";
import Home from "./Pages/Home/Home";
import "../src/styles/global.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const App = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <PublicRoutes />
      </Elements>
    </>
  );
};

export default App;
