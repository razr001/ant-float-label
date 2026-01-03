import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { FloatAutoComplete } from '../src/component/FloatAutoComplete'
import React from 'react'

describe('FloatAutoComplete', () => {
    it('should render with label', () => {
        render(<FloatAutoComplete placeholder="Search" />)
        expect(screen.getAllByText('Search')[0]).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
})
