import { DatePicker } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./index.css";
import { RangePickerProps } from "antd/es/date-picker";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

const { RangePicker } = DatePicker;

export interface FloatRangePickerProps extends RangePickerProps {
  required?:boolean
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
  ...restProps
}: FloatRangePickerProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } =
    useValueHandle({
      id: restProps.id?.toString(),
      defaultValue,
      value,
      onFocus,
      onBlur,
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

  const haveValue = useMemo(() => {
    return isFocus || hasValue;
  }, [hasValue, isFocus]);

  return (
    <FloattingLabelBox
      label={haveValue && placeholder ? placeholder.join(" - ") : ""}
      focused={isFocus}
      haveValue={haveValue}
      width={style?.width}
      height={style?.height}
      required={required}
      status={
        restProps.status || (restProps["aria-invalid"] ? "error" : undefined)
      }
    >
      <RangePicker
        style={{ ...style, width: "100%", border: "none" }}
        variant="borderless"
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandler}
        rootClassName="ant-float-label-form-picker"
        placeholder={hasValue ? ["", ""] : placeholder}
      />
    </FloattingLabelBox>
  );
}
