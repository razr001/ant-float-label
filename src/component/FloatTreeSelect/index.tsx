import { TreeSelect, TreeSelectProps } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatTreeSelectProps extends TreeSelectProps {
  required?:boolean
}

export function FloatTreeSelect({
  placeholder,
  onFocus,
  onBlur,
  value,
  defaultValue,
  style,
  size,
  onChange,
  required,
  ...restProps
}: FloatTreeSelectProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } =
    useValueHandle({
      id: restProps.id?.toString(),
      defaultValue,
      value,
      onFocus,
      onBlur,
    });

  const changeHandler = useCallback(
    (value: any, labelList: React.ReactNode[], extra: any) => {
      handleChange(value);
      if (onChange) {
        onChange(value, labelList, extra);
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
      <TreeSelect
        style={{
          ...style,
          width: "100%",
          border: "none",
        }}
        variant="borderless"
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        size={size}
        onChange={changeHandler}
        rootClassName="ant-float-label-form-select"
      />
    </FloattingLabelBox>
  );
}
