import { createContext } from "react";

/**
 * In order to avoid prop drilling we will use context.
 * This componenet creates a new context in React using createContext() and exports it as categoryContext. This context can be used to share data across components in a React application following the useContext hook.
 * @returns {object} categoryContext
 */

const categoryContext = createContext();
export default categoryContext;
