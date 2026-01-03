import { ConfigProvider, Space, theme, Form } from "antd";
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
} from "ant-float-label";
import { useState, useEffect, useCallback } from "react";
import UseFormDemo from "./UseFormDemo";
import { options, treeData } from "./data";
import FormListDemo from "./FormListDemo";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const windowQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const darkModeChange = useCallback((event) => {
    console.log(event.matches ? true : false);
    setDarkMode(event.matches ? true : false);
  }, []);

  useEffect(() => {
    windowQuery.addEventListener("change", darkModeChange);
    return () => {
      windowQuery.removeEventListener("change", darkModeChange);
    };
  }, [windowQuery, darkModeChange]);

  useEffect(() => {
    console.log(windowQuery.matches ? true : false);
    setDarkMode(windowQuery.matches ? true : false);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <h1>Antd 5 form style similar to MUI</h1>
      <Space>
        <FloatInput placeholder="Input Middle" />
        <FloatInput placeholder="Input Small" size="small" />
        <FloatInput placeholder="Input Warning" status="warning" />
        <FloatInput placeholder="Input error" status="error" />
        <FloatPassword placeholder="Password" />
        <FloatInput placeholder="Borderless Input" variant="borderless" />
        <FloatInput placeholder="Underlined Input" variant="underlined" defaultValue="Underlined Input" />
      </Space>
      <br />
      <br />
      <Space>
        <FloatSelect
          options={[
            { value: "1", label: "option 1" },
            { value: "2", label: "option 2" },
          ]}
          placeholder="Select"
          style={{ width: "200px" }}
          allowClear
        />
        <FloatSelect
          options={[
            { value: "1", label: "A" },
            { value: "2", label: "B" },
          ]}
          placeholder="Multiple Select"
          style={{ width: "200px" }}
          allowClear
          mode="multiple"
        />
        <FloatSelect
          options={[
            { value: "1", label: "option 1" },
            { value: "2", label: "option 2" },
          ]}
          placeholder="Borderless Select"
          style={{ width: "200px" }}
          allowClear
          variant="borderless"
        />
      </Space>
      <br />
      <br />
      <Space>
        <FloatInputNumber
          placeholder="Input Number"
          style={{ width: "100%" }}
        />
        <FloatInputNumber
          placeholder="Input Number"
          style={{ width: "100%" }}
          variant="underlined"
        />
        <FloatAutoComplete
          placeholder="Auto Complete"
          options={[
            { value: "11111111111" },
            { value: "2222222222" },
            { value: "3333333333" },
          ]}
          style={{ width: "200px" }}
        />
        <FloatAutoComplete
          placeholder="Auto Complete"
          options={[
            { value: "11111111111" },
            { value: "2222222222" },
            { value: "3333333333" },
          ]}
          style={{ width: "200px" }}
          variant="underlined"
        />
      </Space>
      <br />
      <br />
      <Space>
        <FloatDatePicker placeholder="Date Picker" style={{ width: "100%" }} />
        <FloatDatePicker placeholder="Date Picker" style={{ width: "100%" }} variant="underlined" />
        <FloatRangePicker placeholder={["Start Date", "End Date"]} />
        <FloatTimePicker placeholder="Time Picker" />
      </Space>
      <br />
      <br />
      <Space>
        <FloatCascader
          options={options}
          style={{ width: "200px" }}
          placeholder="Cascader"
        />
        <FloatCascader
          options={options}
          style={{ width: "200px" }}
          placeholder="Cascader"
          variant="underlined"
        />
        <FloatTreeSelect
          treeData={treeData}
          placeholder="Tree Select"
          style={{ width: "200px" }}
          allowClear
        />
      </Space>
      <UseFormDemo />
      <FormListDemo />
    </ConfigProvider>
  );
}

export default App;
