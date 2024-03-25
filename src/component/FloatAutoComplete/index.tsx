import { AutoComplete, AutoCompleteProps } from "antd";
import {
	InputHTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";
import "./index.css"

export interface FloatAutoCompleteProps extends AutoCompleteProps {}

export function FloatAutoComplete({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	onChange,
	...restProps
}: FloatAutoCompleteProps) {
	const initFlag = useRef(false);
	const [isFocus, setIsFocus] = useState(false);
	const [inputValue, setInputValue] = useState<
		InputHTMLAttributes<HTMLInputElement>["value"] | bigint
	>(defaultValue ?? value);

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
			setInputValue(e.target.value);
			if (onBlur) {
				onBlur(e);
			}
		},
		[onBlur]
	);

	const handleChange = useCallback<
		Exclude<AutoCompleteProps["onChange"], undefined>
	>(
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

	return (
		<FloattingLabelBox
			label={placeholder}
			focused={isFocus}
			haveValue={!!inputValue}
			width={style?.width}
			height={style?.height}
			status={restProps.status}
		>
			<AutoComplete
				style={{
					width: "100%",
					...style,
					border: "none",
				}}
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
				onChange={handleChange}
        rootClassName="ant-float-label-form-auto-complete"
			/>
		</FloattingLabelBox>
	);
}
