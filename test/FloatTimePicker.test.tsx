import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatTimePicker } from '../src/component/FloatTimePicker'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatTimePicker', () => {
    it('should render with label', () => {
        render(<FloatTimePicker placeholder="Time" label='Time' />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Time')[0]).toBeInTheDocument()
    })
})
