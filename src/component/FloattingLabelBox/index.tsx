import { theme } from "antd";
import "./index.css";
import { InputStatus } from "antd/es/_util/statusUtils";
import { useMemo } from "react";
import { Variant } from "antd/es/config-provider";

const { useToken } = theme;

export interface FloattingLabelBoxProps {
  focused?: boolean;
  hasValue?: boolean;
  label?: React.ReactNode;
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  status?: InputStatus;
  required?: boolean;
  fieldsetStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  variant?: Variant;
}

export function FloattingLabelBox({
  focused,
  hasValue,
  label,
  children,
  width,
  height,
  status,
  required,
  fieldsetStyle,
  labelStyle,
  variant = "outlined",
}: FloattingLabelBoxProps) {
  const { token } = useToken();

  const statusColor = useMemo(() => {
    const colors = {
      borderColorActive: token.colorPrimaryActive,
      textColorActive: token.colorPrimary,
      textColor: token.colorTextTertiary,
      borderColor: token.colorBorder,
    };
    if (status === "warning") {
      colors.borderColorActive = token.colorWarningActive;
      colors.textColorActive = token.colorWarningTextActive;
      colors.textColor = token.colorWarningText;
      colors.borderColor = token.colorWarningBorder;
    } else if (status === "error") {
      colors.borderColorActive = token.colorErrorActive;
      colors.textColorActive = token.colorErrorTextActive;
      colors.textColor = token.colorErrorText;
      colors.borderColor = token.colorErrorBorder;
    }
    return colors;
  }, [status, token]);

  const borderStyleMemo = useMemo(() => {
    const borderColor = focused ? statusColor.borderColorActive : statusColor.borderColor;
    if (variant === "outlined") {
      return {
        border: '1px solid',
        borderColor,
      };
    } else if (variant === "underlined") {
      return {
        borderBottom: '1px solid',
        borderBottomColor: borderColor,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: 0,
      };
    }
    return {
      border: 'none',
      borderSize: 0,
      borderColor: 'transparent',
    };
  }, [variant, focused, statusColor]);

  return (
    <div
      className="ant-float-label-box"
      style={{
        width: width ?? "100%",
        height,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: token.borderRadius,
        }}
      >
        {children}
      </div>
      <label
        className="ant-float-label-box-label"
        style={{
          color: focused ? statusColor.textColorActive : statusColor.textColor,
          height: focused || hasValue ? "auto" : "100%",
          transform:
            focused || hasValue
              ? "translate(14px, -9px) scale(0.75)"
              : `translate(1em, 0px) scale(1)`,
          ...labelStyle,
        }}
      >
        {required ? (
          <div style={{ display: "flex", gap: "0.3em", alignItems: "center" }}>
            <span>{label}</span>
            <span style={{ marginTop: "3px" }}>*</span>
          </div>
        ) : (
          label
        )}
      </label>
      <fieldset
        style={{
          borderRadius: token.borderRadius,
          ...borderStyleMemo,
          ...fieldsetStyle
        }}
        className="ant-float-label-box-fieldset"
      >
        <legend
          className="ant-float-label-box-legend"
          style={{
            maxWidth: focused || hasValue ? "100%" : "0.01px",
          }}
        >
          {label}
        </legend>
      </fieldset>
    </div>
  );
}
