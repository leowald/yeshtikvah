import AuthProvider from "./AuthProvider";
import CategoryProvider from "./CategoryProvider";

export default function Provider({ children }) {
  return (
    <AuthProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </AuthProvider>
  );
}
