export function debounce(fn: Function, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>
    return Object.assign(
        (...args: any[]) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => fn(...args), delay)
        },
        { cancel: () => clearTimeout(timeoutId) }
    )
}