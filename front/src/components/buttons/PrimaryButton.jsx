import Button from "../Button";
import Error from "../Error";
import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient.js";

/**
 *
 * This component returns a primary button component which is built on the button component. It takes in the primary color theme from the /theme api and 'colors' the button accordingly.
 */

export default function PrimaryButton({ ...extras }) {
  const [theme, updateTheme] = useState([]);
  const [errorTheme, updateErrorTheme] = useState();

  useEffect(() => {
    const LoadTheme = async () => {
      try {
        const res = await axiosClient.get("/theme");
        updateTheme(res.data);
      } catch (error) {
        updateErrorTheme(error.message);
      }
    };
    LoadTheme();
  }, []);
  return (
    <>
      <div>
        <Button backgroundColor={theme?.primary_color} {...extras}></Button>
        {errorTheme && <Error errText={errorTheme}></Error>}
      </div>
    </>
  );
}
