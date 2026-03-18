import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatCascader } from '../src/component/FloatCascader'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatCascader', () => {
    it('should render with label', () => {
        render(<FloatCascader placeholder="Address" label="Address" options={[]} />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Address')[0]).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
})
