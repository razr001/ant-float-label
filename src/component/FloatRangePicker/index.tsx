import { DatePicker } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./index.css";
import { RangePickerProps } from "antd/es/date-picker";
import { FloattingLabelBox } from "../FloattingLabelBox";

const { RangePicker } = DatePicker;

export interface FloatRangePickerProps extends RangePickerProps {}

export function FloatRangePicker({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	onChange,
	...restProps
}: FloatRangePickerProps) {
	const initFlag = useRef(false);
	const [isFocus, setIsFocus] = useState(false);
	const [inputValue, setInputValue] = useState(defaultValue ?? value);

	const handleFocus = useCallback<
		Exclude<RangePickerProps["onFocus"], undefined>
	>(
		(event, info) => {
			setIsFocus(true);
			if (onFocus) {
				onFocus(event, info);
			}
		},
		[onFocus]
	);

	const handleBlur = useCallback<
		Exclude<RangePickerProps["onBlur"], undefined>
	>(
		(event, info) => {
			setIsFocus(false);
			if (onBlur) {
				onBlur(event, info);
			}
		},
		[onBlur]
	);

	const handleChange = useCallback<
		Exclude<RangePickerProps["onChange"], undefined>
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

	const haveValue = useMemo(() => {
		return !!(isFocus || inputValue);
	}, [inputValue, isFocus]);

	return (
		<FloattingLabelBox
			label={haveValue && placeholder ? placeholder.join(" - ") : ""}
			focused={isFocus}
			haveValue={haveValue}
			width={style?.width}
			height={style?.height}
			status={restProps.status}
		>
			<RangePicker
				style={{...style, width:"100%", border: "none"}}
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
				onChange={handleChange}
				rootClassName="ant-float-label-form-picker"
				placeholder={haveValue ? ["", ""] : placeholder}
			/>
		</FloattingLabelBox>
	);
}
