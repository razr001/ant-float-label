import type { Meta, StoryObj } from "@storybook/react";
import { FloatTimePicker } from "./index";

const meta: Meta<typeof FloatTimePicker> = {
  title: "Components/FloatTimePicker",
  component: FloatTimePicker,
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
    format: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof FloatTimePicker>;

export const Default: Story = {
  args: {
    placeholder: "请选择时间",
    label: "时间",
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "时间（必填）",
    label: "时间",
    required: true,
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    label: "时间",
    disabled: true,
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "错误状态",
    label: "时间",
    status: "error",
    style: { width: 300 },
  },
};

export const CustomFormat: Story = {
  args: {
    placeholder: "HH:mm 格式",
    format: "HH:mm",
    label: "时间",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "下划线样式",
    label: "时间",
    variant: "underlined",
    style: { width: 300 },
  },
};
