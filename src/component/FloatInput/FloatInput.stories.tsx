import type { Meta, StoryObj } from "@storybook/react";
import { FloatInput } from "./index";

const meta: Meta<typeof FloatInput> = {
  title: "Components/FloatInput",
  component: FloatInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    size: {
      control: "select",
      options: ["small", "middle", "large"],
    },
    variant: {
      control: "select",
      options: ["outlined", "borderless", "filled", "underlined"],
    },
    status: {
      control: "select",
      options: ["", "error", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatInput>;

export const Default: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    required: true,
    style: { width: 300 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    defaultValue: "admin",
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    disabled: true,
    defaultValue: "禁用内容",
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    status: "error",
    style: { width: 300 },
  },
};

export const WarningStatus: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    status: "warning",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    variant: "underlined",
    style: { width: 300 },
  },
};

export const Filled: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    variant: "filled",
    style: { width: 300 },
  },
};

export const SmallSize: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    size: "small",
    style: { width: 300 },
  },
};

export const LargeSize: Story = {
  args: {
    placeholder: "请输入内容",
    label: "内容",
    size: "large",
    style: { width: 300 },
  },
};
