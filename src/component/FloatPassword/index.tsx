import { Input } from "antd";
import {
  useCallback,
} from "react";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { PasswordProps } from "antd/es/input";
import "./index.css";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";

const { Password } = Input;

export interface FloatPasswordProps extends PasswordProps {
  required?: boolean
  labelBoxProps?: FloatingLabelBoxProps;
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
  labelBoxProps,
  variant,
  status,
  ...restProps
}: FloatPasswordProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus, formItemStatus } =
    useValueHandle({
      id: restProps.id,
      defaultValue,
      value,
      onFocus,
      onBlur,
      status,
    });

  const changeHanlder = useCallback<
    Exclude<PasswordProps["onChange"], undefined>
  >(
    (e) => {
      handleChange(e.target.value);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  return (
    <FloatingLabelBox
      label={placeholder}
      focused={isFocus}
      hasValue={hasValue}
      width={style?.width}
      height={style?.height}
      required={required}
      status={formItemStatus as InputProps['status']}
      variant={variant}
      {...labelBoxProps}
    >
      <Password
        style={{ ...style, width: "100%", border: "none" }}
        {...restProps}
        variant="borderless"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHanlder}
        rootClassName="ant-float-label-form-input-password"
      />
    </FloatingLabelBox>
  );
}
