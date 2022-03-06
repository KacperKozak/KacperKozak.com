import {
    action,
    delay,
    fromTo,
    lightTrails,
    parallel,
    sequence,
    trail,
    val,
    valChain,
} from 'light-trails'
import { useEffect, useRef, useState } from 'react'

export const useHeroAnimation = () => {
    const titleRef = useRef<any>(null)
    const topLineRef = useRef<any>(null)
    const leftLineRef = useRef<any>(null)
    const rightLineRef = useRef<any>(null)
    const signetRef = useRef<any>(null)
    const bgRef = useRef<any>(null)

    const [startBg, setStartBg] = useState(false)

    useEffect(() => {
        const speed = 1200

        const scaleX = fromTo({ scaleX: val(0, 1) }, speed)
        const scaleY = fromTo({ scaleY: val(0, 1) }, speed / 2)
        const fade = fromTo({ opacity: val(0, 1) }, speed)
        const stroke = fromTo({ strokeDashoffset: val(230, 0) }, speed)

        const o = valChain(0)
        const bgFade = [
            action((isAfter) => isAfter && setStartBg(true)),
            fromTo({ opacity: o(0.7) }, speed),
            fromTo({ opacity: o(0.4) }, speed),
        ]

        const topLineTrail = trail(topLineRef.current, [delay(speed / 3), scaleY])
        const leftLineTrail = trail(leftLineRef.current, [scaleX])
        const rightLineTrail = trail(rightLineRef.current, [scaleX])
        const titleTrail = trail(titleRef.current, [fade])
        const bgTrail = trail(bgRef.current, bgFade)
        const signetTrail = trail(signetRef.current, [stroke])

        const animation = lightTrails(
            sequence([
                signetTrail,
                parallel([
                    bgTrail,
                    titleTrail,
                    topLineTrail,
                    leftLineTrail,
                    rightLineTrail,
                ]),
            ]),
        )

        animation.play()

        return () => animation.pause()
    }, [])

    return {
        refs: {
            titleRef,
            topLineRef,
            leftLineRef,
            rightLineRef,
            signetRef,
            bgRef,
        },
        startBg,
    }
}
