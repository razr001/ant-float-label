import { ConfigProvider, Space, theme } from "antd";
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
} from "../../dist";
import {useState, useEffect, useCallback} from 'react'

const options = [
	{
		value: "zhejiang",
		label: "Zhejiang",
		children: [
			{
				value: "hangzhou",
				label: "Hangzhou",
			},
		],
	},
	{
		value: "jiangsu",
		label: "Jiangsu",
		children: [
			{
				value: "nanjing",
				label: "Nanjing",
			},
		],
	},
];

const treeData = [
	{
		value: "parent 1",
		title: "parent 1",
		children: [
			{
				value: "parent 1-0",
				title: "parent 1-0",
				children: [
					{
						value: "leaf1",
						title: "leaf1",
					},
					{
						value: "leaf2",
						title: "leaf2",
					},
				],
			},
			{
				value: "parent 1-1",
				title: "parent 1-1",
				children: [
					{
						value: "leaf3",
						title: <b style={{ color: "#08c" }}>leaf3</b>,
					},
				],
			},
		],
	},
];

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
		<ConfigProvider theme={{algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
			<h1>Antd 5 form style similar to MUI</h1>
			<Space>
				<FloatInput placeholder="Input Large" size="large" />
				<FloatInput placeholder="Input Middle" />
				<FloatInput placeholder="Input Small" size="small" />
				<FloatInput placeholder="Input Warning" status="warning" />
				<FloatInput placeholder="Input error" status="error" />
				<FloatPassword placeholder="Password" />
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
			</Space>
			<br />
			<br />
			<Space>
				<FloatInputNumber
					placeholder="Input Number"
					style={{ width: "100%" }}
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
			</Space>
			<br />
			<br />
			<Space>
				<FloatDatePicker placeholder="Date Picker" style={{ width: "100%" }} />
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
				<FloatTreeSelect
					treeData={treeData}
					placeholder="Tree Select"
					style={{ width: "200px" }}
					allowClear
				/>
			</Space>
		</ConfigProvider>
	);
}

export default App;
