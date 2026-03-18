import { Cascader, CascaderProps } from "antd";
import { useCallback } from "react";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";
import { FloatComponentProps } from "../../types";

export function FloatCascader({
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
}: FloatComponentProps<CascaderProps> & {
  multiple?: true;
  value?: any;
  defaultValue?: any;
}) {
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

  const changehandler = useCallback(
    (value: any, selectedOptions: any) => {
      handleChange(value);
      if (onChange) {
        onChange(value, selectedOptions);
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
      <Cascader
        style={{ ...style, width: "100%", border: "none" }}
        variant="borderless"
        {...restProps}
        placeholder={isFocus || hasValue ? placeholder : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changehandler}
        rootClassName="ant-float-label-form-select"
      />
    </FloatingLabelBox>
  );
}
