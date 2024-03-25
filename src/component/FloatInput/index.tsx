import { Input, InputProps } from "antd";
import {
	InputHTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";

export interface FloatInputProps extends InputProps {}

export function FloatInput({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	...restProps
}: FloatInputProps) {
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
			<Input
				style={{ ...style, width:"100%", border: "none"}}
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
			/>
		</FloattingLabelBox>
	);
}
