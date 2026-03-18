import { TreeSelect, TreeSelectProps } from "antd";
import { useCallback } from "react";
import { FloatingLabelBox } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";
import { FloatComponentProps } from "../../types";

export function FloatTreeSelect({
  placeholder,
  label,
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
}: FloatComponentProps<TreeSelectProps>) {
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

  const changeHandler = useCallback(
    (value: any, labelList: React.ReactNode[], extra: any) => {
      handleChange(value);
      if (onChange) {
        onChange(value, labelList, extra);
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
      <TreeSelect
        style={{
          ...style,
          width: "100%",
          border: "none",
        }}
        {...restProps}
        placeholder={isFocus || hasValue ? placeholder : ""}
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
