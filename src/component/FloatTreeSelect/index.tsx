import { TreeSelect, TreeSelectProps } from "antd";
import { useCallback } from "react";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";

export interface FloatTreeSelectProps extends TreeSelectProps {
  required?: boolean;
  labelBoxProps?: FloatingLabelBoxProps;
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
  variant,
  labelBoxProps,
  status,
  ...restProps
}: FloatTreeSelectProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus, formItemStatus } =
    useValueHandle({
      id: restProps.id?.toString(),
      defaultValue,
      value,
      onFocus,
      onBlur,
      status,
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
      <TreeSelect
        style={{
          ...style,
          width: "100%",
          border: "none",
        }}
        {...restProps}
        variant="borderless"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        size={size}
        onChange={changeHandler}
        rootClassName="ant-float-label-form-select"
      />
    </FloatingLabelBox>
  );
}
