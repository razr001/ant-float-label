import { Form, FormInstance, Input, InputProps } from "antd";
import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatInputProps extends InputProps {
  required?:boolean
}

export function FloatInput({
  placeholder,
  onFocus,
  onBlur,
  onChange,
  value,
  defaultValue,
  style,
  size,
  required,
  ...restProps
}: FloatInputProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } = useValueHandle({
    id: restProps.id,
    defaultValue,
    value,
    onFocus,
    onBlur,
  });

  const changeHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      handleChange(e.target.value);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  return (
    <FloattingLabelBox
      label={placeholder}
      focused={isFocus}
      haveValue={hasValue}
      width={style?.width}
      height={style?.height}
      required={required}
      status={
        restProps.status || (restProps["aria-invalid"] ? "error" : undefined)
      }
    >
      <Input
        style={{ ...style, width: "100%", border: "none" }}
        variant="borderless"
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandler}
        size={size}
      />
    </FloattingLabelBox>
  );
}
