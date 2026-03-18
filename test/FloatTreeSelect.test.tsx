import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatTreeSelect } from '../src/component/FloatTreeSelect'
import React from 'react'
import { Form } from 'antd'

const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form><Form.Item>{children}</Form.Item></Form>
)

describe('FloatTreeSelect', () => {
    it('should render with label', () => {
        render(<FloatTreeSelect placeholder="Node" label='Node' treeData={[]} />, { wrapper: FormWrapper })
        expect(screen.getAllByText('Node')[0]).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
})
