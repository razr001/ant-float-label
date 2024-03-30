import { TimePickerProps, TimePicker } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";

export interface FloatTimePickerProps extends TimePickerProps {}

export function FloatTimePicker({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	mode,
	onChange,
	...restProps
}: FloatTimePickerProps) {
	const initFlag = useRef(false);
	const [isFocus, setIsFocus] = useState(false);
	const [inputValue, setInputValue] = useState(defaultValue ?? value);

	const handleFocus = useCallback<
		Exclude<TimePickerProps["onFocus"], undefined>
	>(
		(e, info) => {
			setIsFocus(true);
			if (onFocus) {
				onFocus(e, info);
			}
		},
		[onFocus]
	);

	const handleBlur = useCallback<
		Exclude<TimePickerProps["onFocus"], undefined>
	>(
		(e, info) => {
			setIsFocus(false);
			if (onBlur) {
				onBlur(e, info);
			}
		},
		[onBlur]
	);

	const handleChange = useCallback<Exclude<TimePickerProps["onChange"], undefined>>(
		(value, option) => {
			setInputValue(value);
			if (onChange) {
				onChange(value, option);
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
		const currValue =
			Array.isArray(inputValue) && inputValue.length === 0
				? undefined
				: inputValue;
		return !!currValue;
	}, [inputValue]);

	return (
		<FloattingLabelBox
			label={placeholder}
			focused={isFocus}
			haveValue={haveValue}
			width={style?.width}
			height={style?.height}
			status={restProps.status || (restProps["aria-invalid"] ? "error" : undefined)}
		>
			<TimePicker
				style={{
					...style,
					width: "100%",
					border: "none",
				}}
				variant="borderless"
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
				onChange={handleChange}
				mode={mode}
				rootClassName="ant-float-label-form-select"
				placeholder=""
			/>
		</FloattingLabelBox>
	);
}
