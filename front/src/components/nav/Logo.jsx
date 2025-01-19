import PropTypes from "prop-types";
import styles from "./Logo.module.scss";
import { useState, useEffect } from "react";
import Error from "../Error";
import axiosClient from "../../api/axiosClient.js";
import Nav from "react-bootstrap/Nav";
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
        <Nav.Link href="/">
          <img
            role="logo"
            className={`${styles.logo} ${styles[size]}`}
            src={
              size === "xl"
                ? `${import.meta.env.VITE_IMAGE_PATH}` + logo[0]?.image.lg
                : `${import.meta.env.VITE_IMAGE_PATH}${
                    logo[0]?.image[`${size}`]
                  }`
            }
            alt={logo[0]?.alt_text}
          />
        </Nav.Link>

        {errorLogo && <Error errText={errorLogo}></Error>}
      </Container>
    </>
  );
}

Logo.propTypes = {
  /** The size of the logo. Either sm,md,lg or xl. */
  size: PropTypes.string,
};
