import type { Meta, StoryObj } from "@storybook/react";
import { FloatTreeSelect } from "./index";

const meta: Meta<typeof FloatTreeSelect> = {
  title: "Components/FloatTreeSelect",
  component: FloatTreeSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    multiple: { control: "boolean" },
    treeCheckable: { control: "boolean" },
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
type Story = StoryObj<typeof FloatTreeSelect>;

const treeData = [
  {
    value: "parent1",
    title: "技术部",
    children: [
      { value: "child1-1", title: "前端组" },
      { value: "child1-2", title: "后端组" },
      { value: "child1-3", title: "测试组" },
    ],
  },
  {
    value: "parent2",
    title: "产品部",
    children: [
      { value: "child2-1", title: "产品组" },
      { value: "child2-2", title: "设计组" },
    ],
  },
  {
    value: "parent3",
    title: "运营部",
    children: [
      { value: "child3-1", title: "市场组" },
      { value: "child3-2", title: "客服组" },
    ],
  },
];

export const Default: Story = {
  args: {
    placeholder: "请选择部门",
    treeData,
    style: { width: 300 },
  },
};

export const Required: Story = {
  args: {
    placeholder: "部门（必填）",
    treeData,
    required: true,
    style: { width: 300 },
  },
};

export const Multiple: Story = {
  args: {
    placeholder: "多选部门",
    treeData,
    multiple: true,
    style: { width: 300 },
  },
};

export const Checkable: Story = {
  args: {
    placeholder: "勾选部门",
    treeData,
    treeCheckable: true,
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "禁用状态",
    treeData,
    disabled: true,
    style: { width: 300 },
  },
};

export const ErrorStatus: Story = {
  args: {
    placeholder: "错误状态",
    treeData,
    status: "error",
    style: { width: 300 },
  },
};

export const Underlined: Story = {
  args: {
    placeholder: "下划线样式",
    treeData,
    variant: "underlined",
    style: { width: 300 },
  },
};
