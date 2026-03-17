import { DatePicker, DatePickerProps } from "antd";
import { useCallback } from "react";
import "./index.css";
import { FloatingLabelBox, FloatingLabelBoxProps } from "../FloatingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";
import type { InputProps } from "antd";

export interface FloatDatePickerProps extends DatePickerProps {
	required?: boolean
	labelBoxProps?: FloatingLabelBoxProps;
}

export function FloatDatePicker({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	required,
	onChange,
	labelBoxProps,
	variant,
	status,
	...restProps
}: FloatDatePickerProps) {
	const { hasValue, handleChange, handleBlur, handleFocus, isFocus, formItemStatus } = useValueHandle({
		id: restProps.id,
		defaultValue,
		value,
		onFocus,
		onBlur,
		status,
	});

	const changeHandler = useCallback<
		Exclude<DatePickerProps["onChange"], undefined>
	>(
		(value, dateString) => {
			handleChange(value);
			if (onChange) {
				onChange(value, dateString);
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
			status={formItemStatus as InputProps['status']}
			required={required}
			variant={variant}
			{...labelBoxProps}
		>
			<DatePicker
				style={{ ...style, width: "100%", border: "none" }}
				{...restProps}
				variant="borderless"
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				onChange={changeHandler}
				rootClassName="ant-float-label-form-picker"
				placeholder=""
			/>
		</FloatingLabelBox>
	);
}
