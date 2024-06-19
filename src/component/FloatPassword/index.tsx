import { Input, InputProps } from "antd";
import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { PasswordProps } from "antd/es/input";
import "./index.css";
import { useValueHandle } from "../../hook/useValueHandle";

const { Password } = Input;

export interface FloatPasswordProps extends PasswordProps {
  required?:boolean
}

export function FloatPassword({
  placeholder,
  onFocus,
  onBlur,
  value,
  defaultValue,
  style,
  onChange,
  required,
  ...restProps
}: FloatPasswordProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } =
    useValueHandle({
      id: restProps.id,
      defaultValue,
      value,
      onFocus,
      onBlur,
    });

  const changeHanlder = useCallback<
    Exclude<PasswordProps["onChange"], undefined>
  >(
    (value) => {
      handleChange(value);
      if (onChange) {
        onChange(value);
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
      <Password
        style={{ ...style, width: "100%", border: "none" }}
        variant="borderless"
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
				onChange={changeHanlder}
        rootClassName="ant-float-label-form-input-password"
      />
    </FloattingLabelBox>
  );
}
