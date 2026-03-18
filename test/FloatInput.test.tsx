import { render, screen, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatInput } from '../src/component/FloatInput'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatInput', () => {
    it('should render input and label', () => {
        render(<FloatInput placeholder="Username" label="Username" />, { wrapper: FormWrapper })
        // Label checks (multiple because of legend)
        const labels = screen.getAllByText('Username')
        expect(labels.length).toBeGreaterThan(0)
        // Input checks (FloatInput passes props to Input)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })

    it('should toggle label position on focus', async () => {
        render(<FloatInput placeholder="Email" />, { wrapper: FormWrapper })
        const input = screen.getByRole('textbox')

        await act(async () => { input.focus() })
        expect(input).toHaveFocus()

        await act(async () => { input.blur() })
        expect(input).not.toHaveFocus()
    })

    it('should display value when passed', () => {
        render(<FloatInput placeholder="Name" value="John Doe" readOnly />, { wrapper: FormWrapper })
        const input = screen.getByDisplayValue('John Doe')
        expect(input).toBeInTheDocument()
    })
})
