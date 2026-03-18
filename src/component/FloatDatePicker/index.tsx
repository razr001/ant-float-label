import { DatePicker, DatePickerProps } from "antd";
import { useCallback } from "react";
import "./index.css";
import { FloatingLabelBox } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";
import { FloatComponentProps } from "../../types";

export function FloatDatePicker({
  placeholder,
  label,
  onFocus,
  onBlur,
  value,
  defaultValue,
  style,
  required,
  onChange,
  labelBoxProps,
  variant,
  status,
  ...restProps
}: FloatComponentProps<DatePickerProps>) {
  const {
    hasValue,
    handleChange,
    handleBlur,
    handleFocus,
    isFocus,
    formItemStatus,
  } = useValueHandle({
    id: restProps.id,
    defaultValue,
    value,
    onFocus,
    onBlur,
    status,
  });

  const changeHandler = useCallback<
    Exclude<DatePickerProps["onChange"], undefined>
  >(
    (value, dateString) => {
      handleChange(value);
      if (onChange) {
        onChange(value, dateString);
      }
    },
    [onChange],
  );

  return (
    <FloatingLabelBox
      label={label}
      focused={isFocus}
      hasValue={hasValue}
      width={style?.width}
      height={style?.height}
      status={formItemStatus as InputProps["status"]}
      required={required}
      variant={variant}
      {...labelBoxProps}
    >
      <DatePicker
        style={{ ...style, width: "100%", border: "none" }}
        {...restProps}
        placeholder={isFocus || hasValue ? placeholder : ""}
        variant="borderless"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandler}
        rootClassName="ant-float-label-form-picker"
      />
    </FloatingLabelBox>
  );
}
