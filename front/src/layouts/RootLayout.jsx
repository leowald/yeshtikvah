import { Auth0Provider } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

/** This component wraps the entire project in a provider. */

export default function RootLayout({ children }) {
  return (
    <div>
      <Auth0Provider>
        {children}
        <Outlet></Outlet>
      </Auth0Provider>
    </div>
  );
}
