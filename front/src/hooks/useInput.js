import { useState } from "react";

/**
 *
 * @param {string} defaultValue
 * @param {*} validationFn
 * @returns
 */

/**
 * Function that prints a person's name and optionally age if provided.
 * @param {Person} person The person.
 */

export function useInput(defaultValue, validationFn) {
  const [formInput, updateFormInput] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  //const valueIsValid = true;
  const valueIsValid = validationFn(formInput);

  function changeHandler(event) {
    updateFormInput(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: formInput,
    changeHandler,
    handleInputBlur,
    hasError: didEdit & !valueIsValid,
  };
}
