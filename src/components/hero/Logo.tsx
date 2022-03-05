import styled from '@emotion/styled'
import {
    delay,
    easeOut,
    fromTo,
    htmlElementRenderer,
    lightTrails,
    parallel,
    sequence,
    trail,
    val,
} from 'light-trails'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { white } from 'styles/theme'
import triangle from './assets/triangle.svg'
import { Signet } from './Signet'

export const Logo = () => {
    const titleRef = useRef<any>(null)
    const topLineRef = useRef<any>(null)
    const leftLineRef = useRef<any>(null)
    const rightLineRef = useRef<any>(null)
    const signetRef = useRef<any>(null)

    useEffect(() => {
        const speed = 1200

        const scaleX = fromTo({ transform: (v) => `scaleX(${v})` }, speed)
        const scaleY = fromTo({ transform: (v) => `scaleY(${v})` }, speed / 2)
        const fade = fromTo({ opacity: val(0, 1) }, speed)

        const topLineTrail = trail(topLineRef.current, [delay(speed / 3), scaleY])
        const leftLineTrail = trail(leftLineRef.current, [scaleX])
        const rightLineTrail = trail(rightLineRef.current, [scaleX])
        const titleTrail = trail(titleRef.current, [fade])
        const signetTrail = trail(htmlElementRenderer(signetRef.current), [
            fromTo({ strokeDashoffset: val(230, 0) }, speed),
        ])

        const animation = lightTrails(
            parallel([
                signetTrail,
                sequence([
                    delay(speed),
                    parallel([titleTrail, topLineTrail, leftLineTrail, rightLineTrail]),
                ]),
            ]),
        )

        animation.play()

        return () => animation.pause()
    }, [])

    return (
        <>
            <Title ref={titleRef}>Kacper Kozak</Title>
            <Container>
                <TopLine ref={topLineRef} />
                <LeftLine ref={leftLineRef} />
                <RightLine ref={rightLineRef} />
                <Signet ref={signetRef} />
            </Container>
        </>
    )
}

const Container = styled.header({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
})

const Title = styled.h1({
    fontWeight: 'lighter',
    fontSize: 67,
    textAlign: 'center',
    paddingBottom: 50,
})

const Line = styled.div({
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: white,
    borderRadius: 3,
    height: 3,
})

const offset = 'calc(50% + 70px)'

const LeftLine = styled(Line)({
    right: offset,
    left: 0,
    transformOrigin: 'right',
})

const RightLine = styled(Line)({
    left: offset,
    right: 0,
    transformOrigin: 'left',
})

const TopLine = styled(Line)({
    left: 0,
    right: 0,
    bottom: 'calc(100% + 80px)',
    width: 3,
    height: 50,
    transformOrigin: 'bottom',
})

export default Logo
