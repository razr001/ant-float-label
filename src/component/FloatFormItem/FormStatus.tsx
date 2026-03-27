import { Form, FormItemProps } from "antd";
import React from "react";

export function FormStatus({
  children,
  required,
  label,
  ...props
}: {
  children?: React.ReactElement<any>;
  required?: boolean;
  label?: FormItemProps["label"];
}) {
  // Get status from Form.Item context (antd 6 standard approach)
  const { status: formItemStatus } = Form.Item.useStatus();
  return (
    <>
      {children
        ? React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const status = (child.props as any).status;
            const newProps: any = {
              required,
              label,
              status: status || formItemStatus,
              ...props
            };
            return React.cloneElement(child, newProps);
          }
        })
        : null}
    </>
  );
}
