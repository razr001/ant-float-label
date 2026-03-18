import type { Meta, StoryObj } from "@storybook/react";
import { FloatPassword } from "./index";

const meta: Meta<typeof FloatPassword> = {
  title: "Components/FloatPassword",
  component: FloatPassword,
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
type Story = StoryObj<typeof FloatPassword>;

export const Default: Story = {
  args: {
    placeholder: "请输入密码",
    label: "密码",
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "请输入密码",
    label: "密码",
    required: true,
    style: { width: 300 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: "请输入密码",
    label: "密码",
    defaultValue: "123456",
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "请输入密码",
    label: "密码",
    disabled: true,
    defaultValue: "password",
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "请输入密码",
    label: "密码",
    status: "error",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "请输入密码",
    label: "密码",
    variant: "underlined",
    style: { width: 300 },
  },
};
