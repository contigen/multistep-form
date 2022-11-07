import { useState } from "react";
import PropTypes from "prop-types";

export function useMultiForm(componentsArray) {
  const [componentIdx, setComponentIdx] = useState(0);
  if (!componentsArray) {
    return `must be initialized with an array of components`;
  }
  const componentsArrayLength = componentsArray.length;
  const goToPrevForm = () => {
    if (componentIdx <= 0) return;
    setComponentIdx((prevIdx) => prevIdx - 1);
  };
  const goToNextForm = () => {
    if (componentIdx >= componentsArray.length - 1) return false;
    setComponentIdx((prevIdx) => prevIdx + 1);
  };
  const currentComponent = componentsArray[componentIdx];
  return {
    componentIdx,
    componentsArrayLength,
    currentComponent,
    goToPrevForm,
    goToNextForm,
  };
}
