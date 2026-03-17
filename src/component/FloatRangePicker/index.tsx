import { DatePicker } from "antd";
import { useCallback, useMemo } from "react";
import "./index.css";
import { RangePickerProps } from "antd/es/date-picker";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";

const { RangePicker } = DatePicker;

export interface FloatRangePickerProps extends RangePickerProps {
  required?: boolean
  labelBoxProps?: FloatingLabelBoxProps;
}

export function FloatRangePicker({
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
}: FloatRangePickerProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus, formItemStatus } =
    useValueHandle({
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
    [onChange]
  );

  const hasValueFlag = useMemo(() => {
    return isFocus || hasValue;
  }, [hasValue, isFocus]);

  return (
    <FloatingLabelBox
      label={hasValueFlag && placeholder ? placeholder.join(" - ") : ""}
      focused={isFocus}
      hasValue={hasValueFlag}
      width={style?.width}
      height={style?.height}
      required={required}
      status={formItemStatus as InputProps['status']}
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
        placeholder={hasValue ? ["", ""] : placeholder}
      />
    </FloatingLabelBox>
  );
}
