import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useValueHandle } from '../src/hook/useValueHandle'
import React from 'react'
import { Form } from 'antd'

// Wrapper to provide Form.Item context required by useValueHandle (Form.Item.useStatus)
const FormWrapper = ({ children }: { children: React.ReactNode }) => (
    <Form>
        <Form.Item>
            {children}
        </Form.Item>
    </Form>
)

describe('useValueHandle', () => {
    it('should treat number 0 as having a value', () => {
        const { result } = renderHook(() => useValueHandle({ value: 0 }), {
            wrapper: FormWrapper,
        })
        expect(result.current.hasValue).toBe(true)
    })

    it('should treat empty string as NOT having a value', () => {
        const { result } = renderHook(() => useValueHandle({ value: '' }), {
            wrapper: FormWrapper,
        })
        expect(result.current.hasValue).toBe(false)
    })

    it('should treat undefined as NOT having a value', () => {
        const { result } = renderHook(() => useValueHandle({ value: undefined }), {
            wrapper: FormWrapper,
        })
        expect(result.current.hasValue).toBe(false)
    })

    it('should respect external value updates', () => {
        const { result, rerender } = renderHook(({ val }) => useValueHandle({ value: val }), {
            wrapper: FormWrapper,
            initialProps: { val: '' }
        })

        expect(result.current.hasValue).toBe(false)

        rerender({ val: 'hello' })
        expect(result.current.hasValue).toBe(true)
    })
})
