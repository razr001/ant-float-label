import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { FloatAutoComplete } from '../src/component/FloatAutoComplete'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatAutoComplete', () => {
    it('should render with label', () => {
        render(<FloatAutoComplete placeholder="Search" label="Search" />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Search')[0]).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
})
