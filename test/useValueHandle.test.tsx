import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useValueHandle } from '../src/hook/useValueHandle'

describe('useValueHandle', () => {
    it('should treat number 0 as having a value', () => {
        const { result } = renderHook(() => useValueHandle({ value: 0 }))
        expect(result.current.hasValue).toBe(true)
    })

    it('should treat empty string as NOT having a value', () => {
        const { result } = renderHook(() => useValueHandle({ value: '' }))
        expect(result.current.hasValue).toBe(false)
    })

    it('should treat undefined as NOT having a value', () => {
        const { result } = renderHook(() => useValueHandle({ value: undefined }))
        expect(result.current.hasValue).toBe(false)
    })

    it('should respect external value updates', () => {
        const { result, rerender } = renderHook(({ val }) => useValueHandle({ value: val }), {
            initialProps: { val: '' }
        })

        expect(result.current.hasValue).toBe(false)

        rerender({ val: 'hello' })
        expect(result.current.hasValue).toBe(true)
    })
})
