import { Cascader, CascaderProps } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";

export type FloatCascadertProps = CascaderProps

export function FloatCascader({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	onChange,
	...restProps
}: FloatCascadertProps) {
	const initFlag = useRef(false);
	const [isFocus, setIsFocus] = useState(false);
	const [inputValue, setInputValue] = useState(defaultValue ?? value);

	const handleFocus = useCallback<
		Exclude<React.FocusEventHandler<HTMLInputElement>, undefined>
	>(
		(e) => {
			setIsFocus(true);
			if (onFocus) {
				onFocus(e);
			}
		},
		[onFocus]
	);

	const handleBlur = useCallback<
		Exclude<React.FocusEventHandler<HTMLInputElement>, undefined>
	>(
		(e) => {
			setIsFocus(false);
			if (onBlur) {
				onBlur(e);
			}
		},
		[onBlur]
	);

	const handleChange = useCallback(
		(value:any, selectedOptions:any) => {
			setInputValue(value);
			if (onChange) {
				onChange(value, selectedOptions);
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
			<Cascader
				style={{ ...style, width:"100%", border: "none" }}
				variant="borderless"
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
				onChange={handleChange}
				rootClassName="ant-float-label-form-select"
			/>
		</FloattingLabelBox>
	);
}
