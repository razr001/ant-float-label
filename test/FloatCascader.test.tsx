import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatCascader } from '../src/component/FloatCascader'
import React from 'react'

describe('FloatCascader', () => {
    it('should render with label', () => {
        render(<FloatCascader placeholder="Address" options={[]} />)
        expect(screen.getAllByText('Address')[0]).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
})
