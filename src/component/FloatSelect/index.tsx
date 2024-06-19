import { Select, SelectProps } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./index.css";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatSelectProps extends SelectProps {
  required?:boolean
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
      <Select
        style={{ ...style, width: "100%", border: "none" }}
        variant="borderless"
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        size={size}
        onChange={changeHandler}
        mode={mode}
        rootClassName="ant-float-label-form-select"
      />
    </FloattingLabelBox>
  );
}
