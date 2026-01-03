import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { FloatInputNumber } from '../src/component/FloatInputNumber'
import React from 'react'

describe('FloatInputNumber', () => {
    it('should render input and label', () => {
        render(<FloatInputNumber placeholder="Age" />)
        expect(screen.getAllByText('Age')[0]).toBeInTheDocument()
        expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    })

    it('should display value when passed', () => {
        render(<FloatInputNumber placeholder="Age" value={25} />)
        expect(screen.getByRole('spinbutton')).toHaveValue('25')
    })
})
