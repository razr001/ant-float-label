import type { Meta, StoryObj } from "@storybook/react";
import { Form, Button } from "antd";
import { FloatFormItem } from "./index";
import { FloatInput } from "../FloatInput";
import { FloatSelect } from "../FloatSelect";
import { FloatDatePicker } from "../FloatDatePicker";
import { FloatInputNumber } from "../FloatInputNumber";

const meta: Meta<typeof FloatFormItem> = {
  title: "Components/FloatFormItem",
  component: FloatFormItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FloatFormItem>;

export const WithInput: Story = {
  render: () => (
    <Form style={{ width: 400 }}>
      <FloatFormItem label="用户名" name="username">
        <FloatInput />
      </FloatFormItem>
      <FloatFormItem label="密码" name="password">
        <FloatInput />
      </FloatFormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <Form style={{ width: 400 }}>
      <FloatFormItem
        label="用户名"
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <FloatInput />
      </FloatFormItem>
      <FloatFormItem
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: "请输入邮箱" },
          { type: "email", message: "请输入有效的邮箱地址" },
        ]}
      >
        <FloatInput />
      </FloatFormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <Form style={{ width: 400 }}>
      <FloatFormItem
        label="城市"
        name="city"
        rules={[{ required: true, message: "请选择城市" }]}
      >
        <FloatSelect
          options={[
            { value: "beijing", label: "北京" },
            { value: "shanghai", label: "上海" },
            { value: "guangzhou", label: "广州" },
          ]}
        />
      </FloatFormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  ),
};

export const ComplexForm: Story = {
  render: () => (
    <Form style={{ width: 400 }} layout="vertical">
      <FloatFormItem
        label="姓名"
        name="name"
        rules={[{ required: true, message: "请输入姓名" }]}
      >
        <FloatInput />
      </FloatFormItem>
      <FloatFormItem
        label="年龄"
        name="age"
        rules={[{ required: true, message: "请输入年龄" }]}
      >
        <FloatInputNumber style={{ width: "100%" }} />
      </FloatFormItem>
      <FloatFormItem
        label="部门"
        name="department"
        rules={[{ required: true, message: "请选择部门" }]}
      >
        <FloatSelect
          options={[
            { value: "tech", label: "技术部" },
            { value: "product", label: "产品部" },
            { value: "design", label: "设计部" },
          ]}
        />
      </FloatFormItem>
      <FloatFormItem
        label="入职日期"
        name="joinDate"
        rules={[{ required: true, message: "请选择入职日期" }]}
      >
        <FloatDatePicker style={{ width: "100%" }} />
      </FloatFormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          提交
        </Button>
      </Form.Item>
    </Form>
  ),
};
