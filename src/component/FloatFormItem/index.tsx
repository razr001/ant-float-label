import { Form, FormItemProps } from "antd";
import React, { useMemo } from "react";

export interface FloatFormItemProps extends FormItemProps {
  children?: React.ReactElement<any>;
}

export function FloatFormItem({
  children,
  label = "",
  rules,
  required,
  ...restProps
}: FloatFormItemProps) {
  const isRequired = useMemo(() => {
    if (required) return required;
    return rules?.some(
      (value: any) => value.required !== undefined && value.required !== false
    );
  }, [required, rules]);

  return (
    <Form.Item required={required} rules={rules} {...restProps}>
      {children
        ? React.cloneElement(children, {
          placeholder: label,
          required: isRequired,
        })
        : children}
    </Form.Item>
  );
}
