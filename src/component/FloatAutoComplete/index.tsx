import { AutoComplete, AutoCompleteProps } from "antd";
import {
  useCallback,
} from "react";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import "./index.css";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";

export interface FloatAutoCompleteProps extends AutoCompleteProps {
  required?: boolean
  labelBoxProps?: FloatingLabelBoxProps;
}

export function FloatAutoComplete({
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
}: FloatAutoCompleteProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus, formItemStatus } = useValueHandle({
    id: restProps.id,
    defaultValue,
    value,
    onFocus,
    onBlur,
    status,
  });

  const changeHandler = useCallback<
    Exclude<AutoCompleteProps["onChange"], undefined>
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
    <FloatingLabelBox
      label={placeholder}
      required={required}
      focused={isFocus}
      hasValue={hasValue}
      width={style?.width}
      height={style?.height}
      status={formItemStatus as InputProps['status']}
      variant={variant}
      {...labelBoxProps}
    >
      <AutoComplete
        style={{
          width: "100%",
          ...style,
          border: "none",
        }}
        {...restProps}
        variant="borderless"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandler}
        rootClassName="ant-float-label-form-auto-complete"
      />
    </FloatingLabelBox>
  );
}
