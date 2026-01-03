# Ant Float Label

A comprehensive wrapper library for Ant Design components that implements the elegant "Floating Label" pattern (similar to Material UI). This library provides a seamless way to modernize your forms while maintaining the full power and theming capabilities of Ant Design.

[![NPM Version](https://img.shields.io/npm/v/ant-float-label.svg)](https://www.npmjs.com/package/ant-float-label)
[![License](https://img.shields.io/npm/l/ant-float-label.svg)](https://github.com/razr001/ant-float-label/blob/master/LICENSE)

## Features

- **✨ Modern Aesthetics**: Brings the popular floating label design pattern to Ant Design.
- **🎨 Theme Compatible**: Fully integrates with Ant Design 5+ Token System (Design Tokens), supporting light and dark modes automatically.
- **🛠 TypeScript Ready**: Written in TypeScript with full type definitions.
- **🧩 Complete Suite**: Supports a wide range of input components including Input, Select, DatePicker, Cascader, TreeSelect, and more.
- **🚀 Easy Integration**: Works as a drop-in replacement for standard Ant Design components.
- **📱 Responsive**: Adapts perfectly to different screen sizes and form layouts.

## Installation

Install via npm, yarn, or pnpm:

```bash
npm install ant-float-label
# or
yarn add ant-float-label
# or
pnpm add ant-float-label
```

Ensure you have the peer dependencies installed:

```bash
npm install antd react react-dom
```

## Usage

### Basic Usage

You can use the components directly. Passing the `placeholder` prop will automatically act as the floating label content.

```tsx
import React, { useState } from 'react';
import { FloatInput, FloatSelect } from 'ant-float-label';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* The placeholder acts as the floating label */}
      <FloatInput
        placeholder="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <FloatSelect
        placeholder="Gender"
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
    </div>
  );
};
```

### Using with Ant Design Form

The recommended way to use this library in forms is with `FloatFormItem`. It automatically handles the label state and passes it to the underlying component.

```tsx
import React from 'react';
import { Form, Button } from 'antd';
import { FloatFormItem, FloatInput, FloatPassword } from 'ant-float-label';

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form 
      form={form} 
      name="login" 
      onFinish={onFinish}
      style={{ maxWidth: 400 }}
    >
      <FloatFormItem
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <FloatInput />
      </FloatFormItem>

      <FloatFormItem
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <FloatPassword />
      </FloatFormItem>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
```

## Available Components

All components inherit props from their Ant Design counterparts.

| Component | Description |
|-----------|-------------|
| `FloatInput` | Wraps `Input` |
| `FloatPassword` | Wraps `Input.Password` |
| `FloatInputNumber` | Wraps `InputNumber` |
| `FloatSelect` | Wraps `Select` |
| `FloatDatePicker` | Wraps `DatePicker` |
| `FloatRangePicker` | Wraps `DatePicker.RangePicker` |
| `FloatTimePicker` | Wraps `TimePicker` |
| `FloatCascader` | Wraps `Cascader` |
| `FloatTreeSelect` | Wraps `TreeSelect` |
| `FloatAutoComplete` | Wraps `AutoComplete` |
| `FloatFormItem` | Specialized `Form.Item` for automatic label handling |

## Props

### Common Props
Most components accept all standard Ant Design props for their respective base component (e.g., `FloatInput` accepts all `InputProps`).

### Specific Props

- **label** (string | ReactNode): When used with `FloatFormItem`, the `label` prop of the FormItem is automatically used as the floating label.
- **placeholder** (string): When used standalone, the `placeholder` acts as the floating label text.
- **labelBoxProps** (object): Props passed to the internal wrapper for advanced styling (e.g. `style`, `className` for the box container).

## Customization

You can customize the appearance by overriding CSS variables or providing `labelBoxProps`. The library follows Ant Design's design token system, so changing your global theme config will automatically update these components.

```tsx
<FloatInput 
  placeholder="Custom Style" 
  labelBoxProps={{ 
    style: { borderColor: 'red' } 
  }} 
/>
```

## License

MIT © [razr001](https://github.com/razr001)
