import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatPassword } from '../src/component/FloatPassword'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatPassword', () => {
    it('should render password input and label', () => {
        render(<FloatPassword placeholder="Password" />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Password')[0]).toBeInTheDocument()
    })

    it('should toggle visibility', () => {
        const { container } = render(<FloatPassword placeholder="Pass" />, { wrapper: FormWrapper })
        const icon = container.querySelector('.ant-input-password-icon')
        expect(icon).toBeInTheDocument()
    })
})
