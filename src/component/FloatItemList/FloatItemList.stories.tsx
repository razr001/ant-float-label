import type { Meta, StoryObj } from "@storybook/react";
import { Form, Button, Space } from "antd";
import { FloatItemList } from "./index";
import { FloatInput } from "../FloatInput";
import { FloatSelect } from "../FloatSelect";
import { FloatDatePicker } from "../FloatDatePicker";
import { FloatInputNumber } from "../FloatInputNumber";
import { FloatFormItem } from "../FloatFormItem";

const meta: Meta<typeof FloatItemList> = {
  title: "Components/FloatItemList",
  component: FloatItemList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FloatItemList>;

export const WithInput: Story = {
  render: () => (
    <Form
      name="dynamic_form_nest_item"
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onFinish={console.log}
    >
      <FloatItemList name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <FloatFormItem
                  {...restField}
                  name={[name, "first"]}
                  label="First Name"
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <FloatInput placeholder="Enter First Name" />
                </FloatFormItem>
                <FloatFormItem
                  {...restField}
                  name={[name, "last"]}
                  label="Last Name"
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <FloatInput placeholder="Enter Last Name" />
                </FloatFormItem>
                <Button type="dashed" onClick={() => remove(name)} block>
                  Remove
                </Button>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </FloatItemList>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ),
};
