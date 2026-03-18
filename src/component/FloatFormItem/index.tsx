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
      (value: any) => value.required !== undefined && value.required !== false,
    );
  }, [required, rules]);

  return (
    // noStyle + label hidden: Form.Item handles validation state via context (Form.Item.useStatus)
    // The float components read status from Form.Item.useStatus() hook automatically
    <Form.Item
      required={required}
      rules={[{ required: isRequired }, ...(rules || [])]}
      {...restProps}
      label=""
    >
      {children
        ? React.cloneElement(children, {
            required: isRequired,
            label,
          })
        : children}
    </Form.Item>
  );
}
