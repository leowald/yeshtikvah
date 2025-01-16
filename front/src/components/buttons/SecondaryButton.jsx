import Button from "../Button";
import Error from "../Error";

import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient.js";
import { getBackground } from "../../utils/styles.jsx";

export default function SecondaryButton({ ...extras }) {
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
        <Button
          backgroundColor={getBackground(theme[0]?.secondary_color)}
          {...extras}
        ></Button>
        {errorTheme && <Error errText={errorTheme}></Error>}
      </div>
    </>
  );
}
