import { DatePicker, DatePickerProps } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import { FloattingLabelBox } from "../FloattingLabelBox";

export interface FloatDatePickerProps extends DatePickerProps {}

export function FloatDatePicker({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	onChange,
	...restProps
}: FloatDatePickerProps) {
	const initFlag = useRef(false);
	const [isFocus, setIsFocus] = useState(false);
	const [inputValue, setInputValue] = useState(defaultValue ?? value);

	const handleFocus = useCallback<
		Exclude<DatePickerProps["onFocus"], undefined>
	>(
		(event, info) => {
			setIsFocus(true);
			if (onFocus) {
				onFocus(event, info);
			}
		},
		[onFocus]
	);

	const handleBlur = useCallback<Exclude<DatePickerProps["onBlur"], undefined>>(
		(event, info) => {
			setIsFocus(false);
			if (onBlur) {
				onBlur(event, info);
			}
		},
		[onBlur]
	);

	const handleChange = useCallback<
		Exclude<DatePickerProps["onChange"], undefined>
	>(
		(value, dateString) => {
			setInputValue(value);
			if (onChange) {
				onChange(value, dateString);
			}
		},
		[onChange]
	);

	useEffect(() => {
		if (initFlag.current) {
			setInputValue(value);
		}
		initFlag.current = true;
		return () => {
			initFlag.current = false;
		};
	}, [value]);

	return (
		<FloattingLabelBox
			label={placeholder}
			focused={isFocus}
			haveValue={!!inputValue}
			width={style?.width}
			height={style?.height}
			status={restProps.status || (restProps["aria-invalid"] ? "error" : undefined)}
		>
			<DatePicker
				style={{...style, width:"100%", border: "none" }}
				variant="borderless"
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
				onChange={handleChange}
				rootClassName="ant-float-label-form-picker"
				placeholder=""
			/>
		</FloattingLabelBox>
	);
}
