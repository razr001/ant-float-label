import { Form } from "antd";
import { useCallback, useState } from "react";

export function useValueHandle({
  defaultValue,
  value,
  onFocus,
  onBlur,
  status: statusProp,
}: {
  defaultValue?: any;
  value?: any;
  id?: string;
  onFocus?: (...args: any) => void;
  onBlur?: (...args: any) => void;
  status?: string;
}) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isFocus, setIsFocus] = useState(false);

  // Get status from Form.Item context (antd 6 standard approach)
  const { status: formItemStatus } = Form.Item.useStatus();

  // Derived state: Use 'value' prop if present (controlled), otherwise local state (uncontrolled)
  const mergedValue = value !== undefined ? value : inputValue;

  // Merge status: explicit prop > form item context status
  const mergedStatus = statusProp || formItemStatus;

  const handleFocus = useCallback((...args: any) => {
    setIsFocus(true);
    if (typeof onFocus === "function") {
      onFocus(...args);
    }
  }, [onFocus]);

  const handleBlur = useCallback((...args: any) => {
    setIsFocus(false);
    if (typeof onBlur === "function") {
      onBlur(...args);
    }
  }, [onBlur]);

  return {
    hasValue: Array.isArray(mergedValue)
      ? mergedValue.length > 0
      : (mergedValue !== undefined && mergedValue !== null && mergedValue !== ''),
    handleChange: setInputValue,
    handleFocus,
    handleBlur,
    isFocus,
    formItemStatus: mergedStatus,
  };
}
