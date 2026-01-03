import type { ComponentProps } from "react";
import { Form } from "antd";
import { FloatItemListProvider } from "./FloatItemListProvider";

export function FloatItemList({ children, name, ...reset }: ComponentProps<typeof Form.List>) {
    return <FloatItemListProvider name={name}><Form.List name={name} {...reset}>{children}</Form.List></FloatItemListProvider>
}
