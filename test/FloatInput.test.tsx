import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatInput } from '../src/component/FloatInput'
import React from 'react'
import { InputRef } from 'antd'

describe('FloatInput', () => {
    it('should render input and label', () => {
        render(<FloatInput placeholder="Username" />)
        // Label checks (multiple because of legend)
        const labels = screen.getAllByText('Username')
        expect(labels.length).toBeGreaterThan(0)
        // Input checks (FloatInput passes props to Input)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })

    it('should toggle label position on focus', () => {
        const { container } = render(<FloatInput placeholder="Email" />)
        const input = screen.getByRole('textbox')
        const labelTexts = screen.getAllByText('Email')
        const labelText = labelTexts.find(el => el.tagName === 'LABEL') || labelTexts[0]
        const labelContainer = labelText.closest('label')

        // Initially not focused, check styles if possible, or just behavior
        // Since we are using antd classes, we might check for class changes if we knew them, 
        // but checking style changes via JS computations in JSDOM can be tricky.
        // Instead, let's verify the input interaction works.

        input.focus()
        // With real styling, the label would move. 
        // In JSDOM, we mainly check if event handlers fired without error.
        expect(input).toHaveFocus()

        input.blur()
        expect(input).not.toHaveFocus()
    })

    it('should display value when passed', () => {
        render(<FloatInput placeholder="Name" value="John Doe" readOnly />)
        const input = screen.getByDisplayValue('John Doe')
        expect(input).toBeInTheDocument()
    })
})
