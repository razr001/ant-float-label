import { Input, InputProps } from "antd";
import {
  useCallback,
} from "react";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatInputProps extends InputProps {
  required?: boolean
  labelBoxProps?: FloatingLabelBoxProps;
}

export function FloatInput({
  placeholder,
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
}: FloatInputProps) {
  const { hasValue, handleChange, handleBlur, handleFocus, isFocus, formItemStatus } = useValueHandle({
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
      <Input
        style={{ ...style, width: "100%", border: "none" }}
        {...restProps}
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
