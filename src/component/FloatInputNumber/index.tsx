import { InputNumber, InputNumberProps } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatInputNumberProps extends InputNumberProps {
  required?:boolean
}

export function FloatInputNumber({
  placeholder,
  onFocus,
  onBlur,
  value,
  defaultValue,
  style,
  onChange,
  required,
  ...restProps
}: FloatInputNumberProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } =
    useValueHandle({
      id: restProps.id,
      defaultValue,
      value,
      onFocus,
      onBlur,
    });

  const changeHanlder = useCallback<
    Exclude<InputNumberProps["onChange"], undefined>
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
      <InputNumber
        style={{ ...style, width: "100%", border: "none" }}
        variant="borderless"
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHanlder}
        rootClassName="ant-float-label-form-input-number"
      />
    </FloattingLabelBox>
  );
}
