import { FloatingLabelBoxProps } from "../component/FloatingLabelBox";

export type FloatComponentProps<T> = T & {
  required?: boolean;
  labelBoxProps?: FloatingLabelBoxProps;
  label?: string;
};
