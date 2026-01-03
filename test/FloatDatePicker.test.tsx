import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatDatePicker } from '../src/component/FloatDatePicker'
import React from 'react'
import dayjs from 'dayjs'

describe('FloatDatePicker', () => {
    it('should render with label', () => {
        render(<FloatDatePicker placeholder="Birth Date" />)
        expect(screen.getAllByText('Birth Date')[0]).toBeInTheDocument()
    })

    it('should display value', () => {
        const date = dayjs('2023-01-01')
        render(<FloatDatePicker placeholder="Date" value={date} />)
        // Date input value might be formatted
        const input = screen.getByDisplayValue('2023-01-01')
        expect(input).toBeInTheDocument()
    })
})
