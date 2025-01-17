import { createContext } from "react";
/**
 * In order to avoid prop drilling (- passing props into many components in order to get it in the bottom conteiner), we use "useConext".
 * to pass down categories to any component, using categoryContext.jsx.

 * This component returns object as folows:

 * @returns {object} categoryContext

* In order to access the categories in any component, follow these steps:

* 1.You will need to import useContex and categoryContext as follows:
*  import { useContext } from "react";
*  import categoryContext from "./store/categoryContext";


* 2. Pull the categoryCntext object object which has two properties: categories - which returns an array of categories pulled from db.json, and error - in the case of an error.
*   Note that you do not need to pass in any props
*  Use as follows:
* const { categories, error } = useContext(categoryContext);


 */

const categoryContext = createContext();
export default categoryContext;
