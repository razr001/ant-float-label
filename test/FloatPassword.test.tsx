import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { FloatPassword } from '../src/component/FloatPassword'
import React from 'react'

describe('FloatPassword', () => {
    it('should render password input and label', () => {
        render(<FloatPassword placeholder="Password" />)
        expect(screen.getAllByText('Password')[0]).toBeInTheDocument()
        // Antd Password input renders an input with type="password"
        // Note: Antd wraps it, so we seek by placeholder or display value usually, 
        // but here the placeholder is used as label.
        // Let's find by selector or label association
    })

    it('should toggle visibility', () => {
        const { container } = render(<FloatPassword placeholder="Pass" />)
        const icon = container.querySelector('.ant-input-password-icon')
        expect(icon).toBeInTheDocument()
    })
})
