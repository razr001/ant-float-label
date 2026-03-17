import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatDatePicker } from '../src/component/FloatDatePicker'
import React from 'react'
import dayjs from 'dayjs'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatDatePicker', () => {
    it('should render with label', () => {
        render(<FloatDatePicker placeholder="Birth Date" />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Birth Date')[0]).toBeInTheDocument()
    })

    it('should display value', () => {
        const date = dayjs('2023-01-01')
        render(<FloatDatePicker placeholder="Date" value={date} />, { wrapper: FormWrapper })
        const input = screen.getByDisplayValue('2023-01-01')
        expect(input).toBeInTheDocument()
    })
})
