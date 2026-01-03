import { useCallback, useState } from "react";

export function useValueHandle({
  defaultValue,
  value,
  onFocus,
  onBlur
}: {
  defaultValue?: any;
  value?: any;
  id?: string;
  onFocus?: (...args: any) => void;
  onBlur?: (...args: any) => void;
}) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isFocus, setIsFocus] = useState(false);

  // Derived state: Use 'value' prop if present (controlled), otherwise local state (uncontrolled)
  const mergedValue = value !== undefined ? value : inputValue;

  const handleFocus = useCallback((...args: any) => {
    setIsFocus(true);
    if (typeof onFocus === "function") {
      onFocus(...args)
    }
  }, [onFocus]);

  const handleBlur = useCallback((...args: any) => {
    setIsFocus(false);
    if (typeof onBlur === "function") {
      onBlur(args);
    }
  }, [onBlur]);

  return {
    hasValue: Array.isArray(mergedValue)
      ? mergedValue.length > 0
      : (mergedValue !== undefined && mergedValue !== null && mergedValue !== ''),
    handleChange: setInputValue,
    handleFocus,
    handleBlur,
    isFocus
  };
}
