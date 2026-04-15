import { Form, theme } from "antd";
import type { InputProps } from "antd";
import "./index.css";
import { useContext, useEffect, useMemo, useState } from "react";
import FloatFormStatusContext from "../FloatFormItem/FloatFormStatusContext";
import React from "react";

const { useToken } = theme;

export interface FloatingLabelBoxProps {
	focused?: boolean;
	hasValue?: boolean;
	label?: React.ReactNode;
	children?: React.ReactNode;
	width?: string | number;
	height?: string | number;
	status?: InputProps["status"];
	required?: boolean;
	fieldsetStyle?: React.CSSProperties;
	labelStyle?: React.CSSProperties;
	variant?: InputProps["variant"];
}

export function FloatingLabelBox({
	focused,
	hasValue: propsHasValue,
	label: propsLabel,
	children,
	width,
	height,
	status,
	required: propsRequired,
	fieldsetStyle,
	labelStyle,
	variant = "outlined",
}: FloatingLabelBoxProps) {
	const { token } = useToken();
	const { formItemProps, status: formItemStatus } = useContext(
		FloatFormStatusContext,
	) as any;
	const [hasValue, setHasValue] = useState(propsHasValue);
	const currStatus = status || formItemStatus;
	const required = propsRequired || formItemProps?.required;
	const label = propsLabel || formItemProps?.label;

	const form = Form.useFormInstance();

	useEffect(()=>{
		if(form && formItemProps && !propsHasValue){
			setHasValue(!!form.getFieldValue(formItemProps.id))
		}else{
			setHasValue(propsHasValue);
		}
	}, [propsHasValue, formItemProps])

	const statusColor = useMemo(() => {
		const colors = {
			borderColorActive: token.colorPrimaryActive,
			textColorActive: token.colorPrimary,
			textColor: token.colorTextTertiary,
			borderColor: token.colorBorder,
		};
		if (currStatus === "warning") {
			colors.borderColorActive = token.colorWarningActive;
			colors.textColorActive = token.colorWarningTextActive;
			colors.textColor = token.colorWarningText;
			colors.borderColor = token.colorWarningBorder;
		} else if (currStatus === "error") {
			colors.borderColorActive = token.colorErrorActive;
			colors.textColorActive = token.colorErrorTextActive;
			colors.textColor = token.colorErrorText;
			colors.borderColor = token.colorErrorBorder;
		}
		return colors;
	}, [currStatus, token]);

	const borderStyleMemo = useMemo(() => {
		const borderColor = focused
			? statusColor.borderColorActive
			: statusColor.borderColor;
		if (variant === "outlined") {
			return {
				border: "1px solid",
				borderColor,
			};
		} else if (variant === "underlined") {
			return {
				borderBottom: "1px solid",
				borderBottomColor: borderColor,
				borderTop: "none",
				borderLeft: "none",
				borderRight: "none",
				borderRadius: 0,
			};
		}
		return {
			border: "none",
			borderSize: 0,
			borderColor: "transparent",
		};
	}, [variant, focused, statusColor]);

	return (
		<div
			className="ant-float-label-box"
			style={{
				width: width ?? "100%",
				height,
			}}
		>
			<div
				style={{
					width: "100%",
					height: "100%",
					overflow: "hidden",
					borderRadius: token.borderRadius,
				}}
			>
				{formItemProps
					? React.Children.map(children, (child) => {
							if (React.isValidElement(child)) {
								const { onChange: onValueChange } = child.props as any;
								const newProps: any = {
									...formItemProps,
									required: undefined,
									label: undefined,
									onChange: (event: any) => {
										formItemProps?.onChange && formItemProps?.onChange(event);
										onValueChange && onValueChange(event);
									},
								};
								return React.cloneElement(child, newProps);
							}
						})
					: children}
			</div>
			<label
				className="ant-float-label-box-label"
				style={{
					color: focused ? statusColor.textColorActive : statusColor.textColor,
					height: focused || hasValue ? "auto" : "100%",
					transform:
						focused || hasValue
							? "translate(14px, -9px) scale(0.75)"
							: `translate(1em, 0px) scale(1)`,
					...labelStyle,
				}}
			>
				{required && label ? (
					<div style={{ display: "flex", gap: "0.3em", alignItems: "center" }}>
						<span>{label}</span>
						<span style={{ marginTop: "3px" }}>*</span>
					</div>
				) : (
					label
				)}
			</label>
			<fieldset
				style={{
					borderRadius: token.borderRadius,
					...borderStyleMemo,
					...fieldsetStyle,
				}}
				className="ant-float-label-box-fieldset"
			>
				<legend
					className="ant-float-label-box-legend"
					style={{
						maxWidth: focused || hasValue ? "100%" : "0.01px",
					}}
				>
					{`${label}${required ? "*" : ""}`}
				</legend>
			</fieldset>
		</div>
	);
}
