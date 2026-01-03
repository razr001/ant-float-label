import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FloatTreeSelect } from '../src/component/FloatTreeSelect'
import React from 'react'

describe('FloatTreeSelect', () => {
    it('should render with label', () => {
        render(<FloatTreeSelect placeholder="Node" treeData={[]} />)
        expect(screen.getAllByText('Node')[0]).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
})
