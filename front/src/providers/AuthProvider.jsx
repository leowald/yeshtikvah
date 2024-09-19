import { Auth0Provider } from "@auth0/auth0-react";

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  return (
    <>
      <Auth0Provider>{children}</Auth0Provider>
    </>
  );
}
