import { Form } from "antd";
import { FormListProps } from "antd/es/form";
import { FloatItemListProvider } from "./FloatItemListProvider";

export function FloatItemList({ children, name, ...reset }: FormListProps) {
    return <FloatItemListProvider name={name}><Form.List name={name} {...reset}>{children}</Form.List></FloatItemListProvider>
}
