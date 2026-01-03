import { Form, Space, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import { FloatFormItem, FloatSelect, FloatItemList, FloatInputNumber } from "ant-float-label";

let data = {
	name: 'Person 1',
	goals: [
		{ grain: 'month', value: 0 },
		{ grain: null, value: null },
	],
};

export default function FormListDemo() {
	const [form] = Form.useForm();

	useEffect(() => {
		console.log(form.getFieldsValue())
	}, [])

	return (
		<>
			<h1>Form Item List</h1>
			<Form initialValues={data} form={form} >
				<FloatFormItem name={'name'} label="Name">
					<FloatSelect
						options={[
							{ label: 'Person 1', value: 'Person 1' },
							{ label: 'Person 2', value: 'Person 2' },
						]}
					/>
				</FloatFormItem>
				<Form.Item label="Goals">
					<FloatItemList name="goals">
						{(fields, { add, remove }) => (
							<Space orientation="vertical" size="large">
								{fields.map(({ key, name }) => (
									<Space key={key} align="baseline" wrap>
										<FloatFormItem name={[name, 'grain']} label="Grain">
											<FloatSelect
												style={{ minWidth: 100 }}
												options={[
													{ label: 'Month', value: 'month' },
													{ label: 'Year', value: 'year' },
												]}
											/>
										</FloatFormItem>
										<FloatFormItem name={[name, 'value']} label="Value">
											<FloatInputNumber />
										</FloatFormItem>
										<MinusCircleOutlined onClick={() => remove(name)} />
									</Space>
								))}
								<Form.Item>
									<Button onClick={() => add()} icon={<PlusOutlined />}>
										Add Goal
									</Button>
								</Form.Item>
							</Space>
						)}
					</FloatItemList>
				</Form.Item>
			</Form>
		</>
	)
}