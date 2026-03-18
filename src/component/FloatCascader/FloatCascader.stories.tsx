import type { Meta, StoryObj } from "@storybook/react";
import { FloatCascader } from "./index";

const meta: Meta<typeof FloatCascader> = {
  title: "Components/FloatCascader",
  component: FloatCascader,
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
type Story = StoryObj<typeof FloatCascader>;

const options = [
  {
    value: "zhejiang",
    label: "浙江",
    children: [
      {
        value: "hangzhou",
        label: "杭州",
        children: [
          { value: "xihu", label: "西湖区" },
          { value: "yuhang", label: "余杭区" },
        ],
      },
      {
        value: "ningbo",
        label: "宁波",
        children: [
          { value: "haishu", label: "海曙区" },
          { value: "jiangbei", label: "江北区" },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "江苏",
    children: [
      {
        value: "nanjing",
        label: "南京",
        children: [
          { value: "xuanwu", label: "玄武区" },
          { value: "qinhuai", label: "秦淮区" },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    placeholder: "请选择地区",
    label: "地区",
    options,
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "请选择地区",
    label: "地区",
    options,
    required: true,
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "请选择地区",
    label: "地区",
    options,
    disabled: true,
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "请选择地区",
    label: "地区",
    options,
    status: "error",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "请选择地区",
    label: "地区",
    options,
    variant: "underlined",
    style: { width: 300 },
  },
};
