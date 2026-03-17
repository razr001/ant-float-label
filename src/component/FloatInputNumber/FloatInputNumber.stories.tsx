import type { Meta, StoryObj } from "@storybook/react";
import { FloatInputNumber } from "./index";

const meta: Meta<typeof FloatInputNumber> = {
  title: "Components/FloatInputNumber",
  component: FloatInputNumber,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
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
type Story = StoryObj<typeof FloatInputNumber>;

export const Default: Story = {
  args: {
    placeholder: "请输入数字",
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "数量（必填）",
    required: true,
    style: { width: 300 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: "年龄",
    defaultValue: 18,
    style: { width: 300 },
  },
};

export const WithMinMax: Story = {
  args: {
    placeholder: "1 ~ 100",
    min: 1,
    max: 100,
    style: { width: 300 },
  },
};

export const WithStep: Story = {
  args: {
    placeholder: "步长 0.1",
    step: 0.1,
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    disabled: true,
    defaultValue: 42,
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

export const Underlined: Story = {
  args: {
    placeholder: "下划线样式",
    variant: "underlined",
    style: { width: 300 },
  },
};
