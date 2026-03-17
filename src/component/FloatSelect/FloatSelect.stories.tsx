import type { Meta, StoryObj } from "@storybook/react";
import { FloatSelect } from "./index";

const meta: Meta<typeof FloatSelect> = {
  title: "Components/FloatSelect",
  component: FloatSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    mode: {
      control: "select",
      options: [undefined, "multiple", "tags"],
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
type Story = StoryObj<typeof FloatSelect>;

const options = [
  { value: "apple", label: "苹果" },
  { value: "banana", label: "香蕉" },
  { value: "cherry", label: "樱桃" },
  { value: "grape", label: "葡萄" },
  { value: "orange", label: "橙子" },
];

export const Default: Story = {
  args: {
    placeholder: "请选择水果",
    options,
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "请选择（必填）",
    options,
    required: true,
    style: { width: 300 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: "水果",
    options,
    defaultValue: "apple",
    style: { width: 300 },
  },
};

export const Multiple: Story = {
  args: {
    placeholder: "多选水果",
    options,
    mode: "multiple",
    style: { width: 300 },
  },
};

export const Tags: Story = {
  args: {
    placeholder: "标签模式",
    options,
    mode: "tags",
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    options,
    disabled: true,
    defaultValue: "apple",
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "错误状态",
    options,
    status: "error",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "下划线样式",
    options,
    variant: "underlined",
    style: { width: 300 },
  },
};
