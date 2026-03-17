import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatRangePicker } from '../src/component/FloatRangePicker'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatRangePicker', () => {
    it('should render with placeholder label', () => {
        render(<FloatRangePicker placeholder={["Start", "End"]} />, { wrapper: FormWrapper })
        const inputs = screen.getAllByRole('textbox')
        expect(inputs.length).toBeGreaterThan(0)
    })
})
