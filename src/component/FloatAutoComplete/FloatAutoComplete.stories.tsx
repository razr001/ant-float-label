import type { Meta, StoryObj } from "@storybook/react";
import { FloatAutoComplete } from "./index";

const meta: Meta<typeof FloatAutoComplete> = {
  title: "Components/FloatAutoComplete",
  component: FloatAutoComplete,
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
  },
};

export default meta;
type Story = StoryObj<typeof FloatAutoComplete>;

const options = [
  { value: "北京" },
  { value: "上海" },
  { value: "广州" },
  { value: "深圳" },
  { value: "杭州" },
  { value: "成都" },
];

export const Default: Story = {
  args: {
    placeholder: "请输入城市",
    label: "城市",
    options,
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "请输入城市",
    label: "城市",
    options,
    required: true,
    style: { width: 300 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: "请输入城市",
    label: "城市",
    options,
    defaultValue: "北京",
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "请输入城市",
    label: "城市",
    options,
    disabled: true,
    defaultValue: "上海",
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "请输入城市",
    label: "城市",
    options,
    status: "error",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "请输入城市",
    label: "城市",
    options,
    variant: "underlined",
    style: { width: 300 },
  },
};
