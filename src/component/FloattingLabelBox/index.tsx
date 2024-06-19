import { FormInstance, theme } from "antd";
import "./index.css";
import { InputStatus } from "antd/es/_util/statusUtils";
import { useMemo } from "react";

const { useToken } = theme;

export interface FloattingLabelBoxProps {
  focused?: boolean;
  haveValue?: boolean;
  label?: React.ReactNode;
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  status?: InputStatus;
  required?: boolean;
}

export function FloattingLabelBox({
  focused,
  haveValue,
  label,
  children,
  width,
  height,
  status,
  required,
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
          height: focused || haveValue ? "auto" : "100%",
          transform:
            focused || haveValue
              ? "translate(14px, -9px) scale(0.75)"
              : `translate(1em, 0px) scale(1)`,
        }}
      >
        {required ? (
          <div style={{ display: "flex", gap: "0.3em", alignItems:"center" }}>
            <span>{label}</span>
            <span style={{marginTop:"3px"}}>*</span>
          </div>
        ) : (
          label
        )}
      </label>
      <fieldset
        style={{
          border: focused
            ? `2px solid ${statusColor.borderColorActive}`
            : `1px solid ${statusColor.borderColor}`,
          borderRadius: token.borderRadius,
        }}
        className="ant-float-label-box-fieldset"
      >
        <legend
          className="ant-float-label-box-legend"
          style={{
            maxWidth: focused || haveValue ? "100%" : "0.01px",
          }}
        >
          {label}
        </legend>
      </fieldset>
    </div>
  );
}
