import { Form } from "antd";
import { FormContext, FormItemInputContext } from "antd/es/form/context";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { FloatItemListContext } from "../component/FloatItemList/FloatItemListProvider";

export function useValueHandle({
  defaultValue,
  value,
  id,
  onFocus,
  onBlur
}: {
  defaultValue?: any;
  value?: any;
  id?: string;
  onFocus?: (...args: any) => void;
  onBlur?: (...args: any) => void;
}) {
  const initFlag = useRef(false);
  const [isFocus, setIsFocus] = useState(false);
  const { form } = useContext(FormContext);
  const { name } = useContext(FormItemInputContext);
  const { name: formListName } = useContext(FloatItemListContext)
  const [inputValue, setInputValue] = useState(defaultValue ?? value);

  const nameMemo = useMemo(() => {
    if(Array.isArray(name) && formListName){
      return [formListName, ...name];
    }
    return name;
  }, [name, formListName])

  const changeValue = Form.useWatch(
    nameMemo,
    form
  );
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

  useEffect(() => {
    if (initFlag.current) {
      setInputValue(value);
    }
    initFlag.current = true;
  }, [value]);

  useEffect(() => {
    if (form && id) {
      setInputValue(changeValue);
    }
  }, [changeValue, form]);

  return {
    hasValue: Array.isArray(inputValue) ? inputValue.length > 0 : typeof value === "number" ? true : !!inputValue,
    handleChange: setInputValue,
    handleFocus,
    handleBlur,
    isFocus
  };
}
