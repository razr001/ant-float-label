import { DatePicker, DatePickerProps } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import { FloattingLabelBox, FloattingLabelBoxProps } from "../FloattingLabelBox";
import { useValueHandle } from "../../hook/useValueHandle";

export interface FloatDatePickerProps extends DatePickerProps {
	required?:boolean
	labelBoxProps?: FloattingLabelBoxProps;
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
	...restProps
}: FloatDatePickerProps) {
	const { hasValue, handleChange, handleBlur, handleFocus, isFocus } = useValueHandle({
    id: restProps.id,
    defaultValue,
    value,
    onFocus,
    onBlur,
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
		<FloattingLabelBox
			label={placeholder}
			focused={isFocus}
			hasValue={hasValue}
			width={style?.width}
			height={style?.height}
			status={restProps.status || (restProps["aria-invalid"] ? "error" : undefined)}
			required={required}
			variant={variant}
			{...labelBoxProps}
		>
			<DatePicker
				style={{...style, width:"100%", border: "none" }}
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
		</FloattingLabelBox>
	);
}
