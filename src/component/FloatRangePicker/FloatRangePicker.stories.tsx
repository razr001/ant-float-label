import type { Meta, StoryObj } from "@storybook/react";
import { FloatRangePicker } from "./index";

const meta: Meta<typeof FloatRangePicker> = {
  title: "Components/FloatRangePicker",
  component: FloatRangePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
type Story = StoryObj<typeof FloatRangePicker>;

export const Default: Story = {
  args: {
    placeholder: ["开始日期", "结束日期"],
    style: { width: 360 },
  },
};

export const Required: Story = {
  args: {
    placeholder: ["开始日期", "结束日期"],
    required: true,
    style: { width: 360 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: ["开始日期", "结束日期"],
    disabled: true,
    style: { width: 360 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: ["开始日期", "结束日期"],
    status: "error",
    style: { width: 360 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: ["开始日期", "结束日期"],
    variant: "underlined",
    style: { width: 360 },
  },
};
