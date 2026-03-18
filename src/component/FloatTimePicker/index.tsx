import { TimePickerProps, TimePicker } from "antd";
import { useCallback } from "react";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";
import { FloatComponentProps } from "../../types";

export function FloatTimePicker({
  placeholder,
  label,
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
  status,
  ...restProps
}: FloatComponentProps<TimePickerProps>) {
  const {
    hasValue,
    handleChange,
    handleBlur,
    handleFocus,
    isFocus,
    formItemStatus,
  } = useValueHandle({
    id: restProps.id?.toString(),
    defaultValue,
    value,
    onFocus,
    onBlur,
    status,
  });

  const changeHandler = useCallback<
    Exclude<TimePickerProps["onChange"], undefined>
  >(
    (value, option) => {
      handleChange(value);
      if (onChange) {
        onChange(value, option);
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
      required={required}
      status={formItemStatus as InputProps["status"]}
      variant={variant}
      {...labelBoxProps}
    >
      <TimePicker
        style={{
          ...style,
          width: "100%",
          border: "none",
        }}
        {...restProps}
        placeholder={isFocus || hasValue ? placeholder : ""}
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
