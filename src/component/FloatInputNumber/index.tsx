import { InputNumber, InputNumberProps } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import { FloattingLabelBox } from "../FloattingLabelBox";

export interface FloatInputNumberProps extends InputNumberProps {}

export function FloatInputNumber({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	...restProps
}: FloatInputNumberProps) {
	const initFlag = useRef(false);
	const [isFocus, setIsFocus] = useState(false);
	const [inputValue, setInputValue] = useState(defaultValue ?? value);

	const handleFocus: React.FocusEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			setIsFocus(true);
			if (onFocus) {
				onFocus(e);
			}
		},
		[onFocus]
	);

	const handleBlur: React.FocusEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			setIsFocus(false);
			setInputValue(e.target.value);
			if (onBlur) {
				onBlur(e);
			}
		},
		[onBlur]
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
			status={restProps.status}
		>
			<InputNumber
				style={{...style, width:"100%", border: "none"}}
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
				rootClassName="ant-float-label-form-input-number"
			/>
		</FloattingLabelBox>
	);
}
