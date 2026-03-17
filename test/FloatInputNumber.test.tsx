import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatInputNumber } from '../src/component/FloatInputNumber'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatInputNumber', () => {
    it('should render input and label', () => {
        render(<FloatInputNumber placeholder="Age" />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Age')[0]).toBeInTheDocument()
        expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    })

    it('should display value when passed', () => {
        render(<FloatInputNumber placeholder="Age" value={25} />, { wrapper: FormWrapper })
        expect(screen.getByRole('spinbutton')).toHaveValue('25')
    })
})
