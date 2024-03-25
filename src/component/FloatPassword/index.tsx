import { Input, InputProps } from "antd";
import {
	InputHTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { FloattingLabelBox } from "../FloattingLabelBox";
import { PasswordProps } from "antd/es/input";
import "./index.css"

const { Password } = Input;

export interface FloatPasswordProps extends PasswordProps  {}

export function FloatPassword({
	placeholder,
	onFocus,
	onBlur,
	value,
	defaultValue,
	style,
	size,
	...restProps
}: FloatPasswordProps) {
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
			status={restProps.status}
		>
			<Password
				style={{ ...style, width: "100%", border: "none" }}
				{...restProps}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				defaultValue={defaultValue}
				size={size}
				rootClassName="ant-float-label-form-input-password"
			/>
		</FloattingLabelBox>
	);
}
