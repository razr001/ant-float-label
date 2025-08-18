import { Form } from "antd";
import {
  FloatDatePicker,
  FloatInput,
  FloatInputNumber,
  FloatSelect,
  FloatRangePicker,
  FloatCascader,
  FloatTreeSelect,
  FloatAutoComplete,
  FloatTimePicker,
  FloatPassword,
  FloatFormItem,
} from "../../dist";
import { useEffect } from "react";
import { options, treeData } from "./data";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(weekday);
dayjs.extend(localeData);

export default function UseForm() {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      floatAutoComplete: "11111111111",
      rangePicker: [dayjs("2021-05-01"), dayjs("2024-04-15")],
      // floatSelect: 0,
      // floatTreeSelect: "leaf3",
      // floatInputNumber: 999
    });
  }, []);

  return (
    <div style={{ marginTop: "12px" }}>
      <h1>Use Form</h1>
      <Form name="test_form" form={form} style={{ maxWidth: 600 }}>
        <FloatFormItem
          name="floatAutoComplete"
          rules={[{ required: true }]}
          label="FloatAutoComplete"
    
        >
          <FloatAutoComplete
            options={[
              { value: "11111111111" },
              { value: "2222222222" },
              { value: "3333333333" },
            ]}
            style={{ width: "200px" }}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </FloatFormItem>
        <FloatFormItem name="rangePicker">
          <FloatRangePicker
            placeholder={["Start Date", "End Date"]}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </FloatFormItem>
        <FloatFormItem
          name="floatSelect"
          rules={[{ required: true }]}
          label="Select"
        >
          <FloatSelect
            options={[
              { value: 0, label: "option 1" },
              { value: 1, label: "option 2" },
            ]}
            style={{ width: "200px" }}
            allowClear
            onChange={(value) => {
              console.log(value);
            }}
          />
        </FloatFormItem>
        <FloatFormItem
          name="floatTreeSelect"
          rules={[{ required: true }]}
          label="Tree Select"
        >
          <FloatTreeSelect
            treeData={treeData}
            style={{ width: "200px" }}
            allowClear
            treeDefaultExpandAll
            onChange={(value) => {
              console.log(value);
            }}
          />
        </FloatFormItem>
        <FloatFormItem
          name="cascader"
          rules={[{ required: true }]}
          label="Cascader"
        >
          <FloatCascader
            options={options}
            style={{ width: "200px" }}
            placeholder="Cascader"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </FloatFormItem>
        <FloatFormItem
          name="floatInputNumber"
          rules={[{ required: true }]}
          label="FloatInputNumber"
        >
          <FloatInputNumber
            style={{ width: "200px" }}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </FloatFormItem>
      </Form>
    </div>
  );
}
