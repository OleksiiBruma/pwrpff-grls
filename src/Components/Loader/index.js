import React from "react";
import TPLoader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => (
  <TPLoader
    type="Puff"
    color="#00BFFF"
    heigh={100}
    width={100}
    timeout={3000}
  />
);

export default Loader;
