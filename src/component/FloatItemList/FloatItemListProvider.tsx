import { NamePath } from "antd/es/form/interface";
import React, { useMemo } from "react";

export interface FloatItemListContextProps {
    name?: NamePath
}

export interface FloatItemListProviderProps {
    children?: React.ReactNode;
    name?: NamePath
}

export const FloatItemListContext = React.createContext<FloatItemListContextProps>({});

export function FloatItemListProvider({ children, name }: FloatItemListProviderProps) {
    const nameMemo = useMemo(() => ({ name }), [name])
    return (
        <FloatItemListContext.Provider value={nameMemo}>
            {children}
        </FloatItemListContext.Provider>
    )
}