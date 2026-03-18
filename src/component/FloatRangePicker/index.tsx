import { DatePicker } from "antd";
import { useCallback, useMemo } from "react";
import "./index.css";
import { RangePickerProps } from "antd/es/date-picker";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";
import { FloatComponentProps } from "../../types";

const { RangePicker } = DatePicker;

export function FloatRangePicker({
  placeholder,
  label,
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
}: Omit<FloatComponentProps<RangePickerProps>, "label"> & {
  label?: [string, string];
}) {
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
    Exclude<RangePickerProps["onChange"], undefined>
  >(
    (value, dateString) => {
      handleChange(value);
      if (onChange) {
        onChange(value, dateString);
      }
    },
    [onChange],
  );

  const hasValueFlag = useMemo(() => {
    return isFocus || hasValue;
  }, [hasValue, isFocus]);

  const labelText = useMemo(() => (label ? label.join(" - ") : ""), [label]);
  const labelPlaceholder = useMemo(
    () =>
      label && required
        ? (label.map((item) => item + "*") as [string, string])
        : label,
    [label, required],
  );

  return (
    <FloatingLabelBox
      label={hasValueFlag && labelText}
      focused={isFocus}
      hasValue={hasValueFlag}
      width={style?.width}
      height={style?.height}
      required={required}
      status={formItemStatus as InputProps["status"]}
      variant={variant}
      {...labelBoxProps}
    >
      <RangePicker
        style={{ ...style, width: "100%", border: "none" }}
        {...restProps}
        variant="borderless"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandler}
        rootClassName="ant-float-label-form-picker"
        placeholder={isFocus || hasValue ? placeholder : labelPlaceholder}
      />
    </FloatingLabelBox>
  );
}
