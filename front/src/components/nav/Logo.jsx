import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../Error";
import axiosClient from "../../api/axiosClient.js";

export default function Logo({ size }) {
  const [logo, updateLogo] = useState([]);
  const [errorLogo, updateErrorLogo] = useState();

  useEffect(() => {
    const LoadLogo = async () => {
      try {
        const res = await axiosClient.get("/logo");
        updateLogo(res.data);
      } catch (error) {
        updateErrorLogo(error.message);
      }
    };

    LoadLogo();
  }, []);

  return (
    <>
      <Link to="/">
        <img
          src={size === "xl" ? logo[0].image.lg : `${logo[0].image[`${size}`]}`}
          width={
            size === "sm"
              ? "150px"
              : size === "md"
              ? "300px"
              : size === "lg"
              ? "500px"
              : size === "xl"
              ? "750px"
              : ""
          }
          height={
            size === "sm"
              ? "150px"
              : size === "md"
              ? "300px"
              : size === "lg"
              ? "500px"
              : size === "xl"
              ? "750px"
              : ""
          }
          className="d-inline-block align-top"
          alt={logo[0].alt_text}
        />
      </Link>

      {errorLogo && <Error errText={errorLogo}></Error>}
    </>
  );
}

Logo.propTypes = {
  /** The size of the logo. Either sm,md,lg or xl. */
  size: PropTypes.string,
};
