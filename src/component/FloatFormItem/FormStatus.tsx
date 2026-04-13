import { Form } from "antd";
import FloatFormStatusContext from "./FloatFormStatusContext";

export function FormStatus({ children, ...props }: Record<string, any>) {
	const { status } = Form.Item.useStatus();
	return (
		<FloatFormStatusContext.Provider value={{ formItemProps: props, status }}>
			{/* {children
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
				: null} */}
			{children}
		</FloatFormStatusContext.Provider>
	);
}
