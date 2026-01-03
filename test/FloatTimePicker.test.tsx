import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatTimePicker } from '../src/component/FloatTimePicker'
import React from 'react'
import dayjs from 'dayjs'

describe('FloatTimePicker', () => {
    it('should render with label', () => {
        render(<FloatTimePicker placeholder="Time" />)
        expect(screen.getAllByText('Time')[0]).toBeInTheDocument()
    })
})
