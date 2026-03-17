import type { Meta, StoryObj } from "@storybook/react";
import { FloatDatePicker } from "./index";

const meta: Meta<typeof FloatDatePicker> = {
  title: "Components/FloatDatePicker",
  component: FloatDatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    variant: {
      control: "select",
      options: ["outlined", "borderless", "filled", "underlined"],
    },
    status: {
      control: "select",
      options: ["", "error", "warning"],
    },
    picker: {
      control: "select",
      options: ["date", "week", "month", "quarter", "year"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatDatePicker>;

export const Default: Story = {
  args: {
    placeholder: "请选择日期",
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "日期（必填）",
    required: true,
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    disabled: true,
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "错误状态",
    status: "error",
    style: { width: 300 },
  },
};

export const WarningStatus: Story = {
  args: {
    placeholder: "警告状态",
    status: "warning",
    style: { width: 300 },
  },
};

export const MonthPicker: Story = {
  args: {
    placeholder: "请选择月份",
    picker: "month",
    style: { width: 300 },
  },
};

export const YearPicker: Story = {
  args: {
    placeholder: "请选择年份",
    picker: "year",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "下划线样式",
    variant: "underlined",
    style: { width: 300 },
  },
};
