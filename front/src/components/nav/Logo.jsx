import PropTypes from "prop-types";
import "./Logo.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../Error";
import axiosClient from "../../api/axiosClient.js";
import Container from "react-bootstrap/Container";

/**
 * This component displays the logo of the website.
 * The image is taken in from the /logo api.
 * The size is taken in via props.
 */

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
      <Container>
        <Link to="/">
          <img
            role="logo"
            className={`logo ${size}`}
            src={
              size === "xl" ? logo[0]?.image.lg : `${logo[0]?.image[`${size}`]}`
            }
            alt={logo[0]?.alt_text}
          />
        </Link>

        {errorLogo && <Error errText={errorLogo}></Error>}
      </Container>
    </>
  );
}

Logo.propTypes = {
  /** The size of the logo. Either sm,md,lg or xl. */
  size: PropTypes.string,
};
