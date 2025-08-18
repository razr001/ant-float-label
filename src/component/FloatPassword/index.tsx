import { Input } from "antd";
import {
  useCallback,
} from "react";
import { FloattingLabelBox, FloattingLabelBoxProps } from "../FloattingLabelBox";
import { PasswordProps } from "antd/es/input";
import "./index.css";
import { useValueHandle } from "../../hook/useValueHandle";

const { Password } = Input;

export interface FloatPasswordProps extends PasswordProps {
  required?:boolean
  labelBoxProps?: FloattingLabelBoxProps;
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
      hasValue={hasValue}
      width={style?.width}
      height={style?.height}
      required={required}
      status={
        restProps.status || (restProps["aria-invalid"] ? "error" : undefined)
      }
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
    </FloattingLabelBox>
  );
}
