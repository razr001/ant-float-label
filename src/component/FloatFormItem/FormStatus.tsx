import { Form } from "antd";
import React from "react";

export function FormStatus({ children, required, label, onChange, ...props }: Record<string, any>) {
	// Get status from Form.Item context (antd 6 standard approach)
	const { status: formItemStatus } = Form.Item.useStatus();

	return (
		<>
			{children
				? React.Children.map(children, (child) => {
						if (React.isValidElement(child)) {
							const { status, onChange:onValueChange } = (child.props as any);
							const newProps: any = {
								required,
								label,
								status: status || formItemStatus,
                ...props,
								onChange:(event:any)=>{
                  onChange && onChange(event);
                  onValueChange && onValueChange(event);
                }
							};
							return React.cloneElement(child, newProps);
						}
					})
				: null}
		</>
	);
}
