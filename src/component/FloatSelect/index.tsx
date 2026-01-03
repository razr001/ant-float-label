import { Select, SelectProps } from "antd";
import { useCallback } from "react";
import "./index.css";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatSelectProps extends SelectProps {
  required?: boolean
  labelBoxProps?: FloatingLabelBoxProps;
}

export function FloatSelect({
  placeholder,
  onFocus,
  onBlur,
  value,
  defaultValue,
  style,
  size,
  mode,
  onChange,
  required,
  labelBoxProps,
  variant,
  ...restProps
}: FloatSelectProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } =
    useValueHandle({
      id: restProps.id?.toString(),
      defaultValue,
      value,
      onFocus,
      onBlur,
    });

  const changeHandler = useCallback<
    Exclude<SelectProps["onChange"], undefined>
  >(
    (value, option) => {
      handleChange(value);
      if (onChange) {
        onChange(value, option);
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
      status={
        restProps.status || (restProps["aria-invalid"] ? "error" : undefined)
      }
      variant={variant}
      {...labelBoxProps}
    >
      <Select
        style={{ ...style, width: "100%", border: "none" }}
        {...restProps}
        variant="borderless"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        size={size}
        onChange={changeHandler}
        mode={mode}
        rootClassName="ant-float-label-form-select"
      />
    </FloatingLabelBox>
  );
}
