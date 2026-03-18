import { Input, InputProps } from "antd";
import { useCallback } from "react";
import { FloatingLabelBox } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import { FloatComponentProps } from "../../types";

export function FloatInput({
  placeholder,
  label,
  onFocus,
  onBlur,
  onChange,
  value,
  defaultValue,
  style,
  size,
  required,
  labelBoxProps,
  variant,
  status,
  ...restProps
}: FloatComponentProps<InputProps>) {
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

  const changeHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      handleChange(e.target.value);
      if (onChange) {
        onChange(e);
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
      <Input
        style={{ ...style, width: "100%", border: "none" }}
        {...restProps}
        placeholder={isFocus || hasValue ? placeholder : ""}
        variant="borderless"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandler}
        size={size}
      />
    </FloatingLabelBox>
  );
}
