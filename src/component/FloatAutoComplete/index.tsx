import { AutoComplete, AutoCompleteProps, FormInstance } from "antd";
import {
  useCallback,
} from "react";
import { FloattingLabelBox, FloattingLabelBoxProps } from "../FloattingLabelBox";
import "./index.css";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatAutoCompleteProps extends AutoCompleteProps {
  required?:boolean
  labelBoxProps?: FloattingLabelBoxProps;
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
  ...restProps
}: FloatAutoCompleteProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus } = useValueHandle({
    id: restProps.id,
    defaultValue,
    value,
    onFocus,
    onBlur,
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
    <FloattingLabelBox
      label={placeholder}
      required={required}
      focused={isFocus}
      hasValue={hasValue}
      width={style?.width}
      height={style?.height}
      status={
        restProps.status || (restProps["aria-invalid"] ? "error" : undefined)
      }
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
    </FloattingLabelBox>
  );
}
