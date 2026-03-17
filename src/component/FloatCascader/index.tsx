import { Cascader, CascaderProps } from "antd";
import { useCallback } from "react";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";

export interface FloatCascadertProps extends CascaderProps {
  multiple?: true;
  required?: boolean;
  value?: any
  defaultValue?: any
  labelBoxProps?: FloatingLabelBoxProps;
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
  labelBoxProps,
  variant,
  status,
  ...restProps
}: FloatCascadertProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus, formItemStatus } =
    useValueHandle({
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
    [onChange]
  );

  return (
    <FloatingLabelBox
      label={placeholder}
      focused={isFocus}
      hasValue={hasValue}
      width={style?.width}
      height={style?.height}
      required={required}
      status={formItemStatus as InputProps['status']}
      variant={variant}
      {...labelBoxProps}
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
    </FloatingLabelBox>
  );
}
