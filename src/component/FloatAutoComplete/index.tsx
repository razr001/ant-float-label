import { AutoComplete, AutoCompleteProps } from "antd";
import { useCallback, useContext } from "react";
import { FloatingLabelBox } from "../FloatingLabelBox";
import "./index.css";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";
import { FloatComponentProps } from "../../types";

export function FloatAutoComplete({
  placeholder,
  label,
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
}: FloatComponentProps<AutoCompleteProps>) {
  const {
    hasValue,
    handleChange,
    handleBlur,
    handleFocus,
    isFocus,
  } = useValueHandle({
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
    [onChange],
  );

  return (
    <FloatingLabelBox
      label={label}
      required={required}
      focused={isFocus}
      hasValue={hasValue}
      width={style?.width}
      height={style?.height}
      status={(status) as InputProps["status"]}
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
        placeholder={isFocus || hasValue ? placeholder : ""}
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
