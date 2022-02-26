import { useEffect, useState } from 'react'

export const useTime = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        let ref: number
        let startTime: number
        const loop = (t: number) => {
            if (!startTime) startTime = t
            setTime((t - startTime) / 1000)
            ref = requestAnimationFrame(loop)
        }
        ref = requestAnimationFrame(loop)

        return () => cancelAnimationFrame(ref)
    }, [])

    return time
}
