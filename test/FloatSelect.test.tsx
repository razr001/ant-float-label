import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { FloatSelect } from '../src/component/FloatSelect'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatSelect', () => {
    it('should render select and label', () => {
        render(<FloatSelect placeholder="Select Item" />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Select Item')[0]).toBeInTheDocument()
    })

    it('should handle value changes', () => {
        const onChange = vi.fn()
        render(
            <FloatSelect
                placeholder="Select Item"
                options={[{ label: 'Option 1', value: '1' }]}
                onChange={onChange}
                open
            />,
            { wrapper: FormWrapper }
        )
        expect(screen.getAllByText('Select Item')[0]).toBeInTheDocument()
    })

    it('should display value when passed', () => {
        render(
            <FloatSelect
                placeholder="Select Item"
                value="1"
                options={[{ label: 'Option 1', value: '1' }]}
            />,
            { wrapper: FormWrapper }
        )
        expect(screen.getByText('Option 1')).toBeInTheDocument()
    })
})
