import { Cascader, CascaderProps } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatCascadertProps  extends CascaderProps{
  multiple?:true;
  required?:boolean;
  value?:any
  defaultValue?:any
};

export function FloatCascader({
  placeholder,
  onFocus,
  onBlur,
  value,
  defaultValue,
  style,
	required,
  onChange,
  ...restProps
}: FloatCascadertProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } =
    useValueHandle({
      id: restProps.id,
      defaultValue,
      value,
      onFocus,
      onBlur,
    });

  const changehandler = useCallback(
    (value: any, selectedOptions: any) => {
      handleChange(value);
      if (onChange) {
        onChange(value, selectedOptions);
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
      <Cascader
        style={{ ...style, width: "100%", border: "none" }}
        variant="borderless"
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changehandler}
        rootClassName="ant-float-label-form-select"
      />
    </FloattingLabelBox>
  );
}
