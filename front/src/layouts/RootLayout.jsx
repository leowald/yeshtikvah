import Provider from "../providers/Provider";
import { Outlet } from "react-router-dom";

/** This component wraps the entire project in a provider. */

export default function RootLayout() {
  return (
    <Provider>
      <Outlet></Outlet>
    </Provider>
  );
}
