import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Node } from 'gl-react'
import { Surface } from 'gl-react-dom'
import { useTime } from 'hooks/useTime'
import React from 'react'
import { shaders } from './shaders'

export const Background = () => {
    const time = useTime()

    if (typeof window === 'undefined') return null

    const width = window.innerWidth
    const height = window.innerHeight

    return (
        <Wrapper>
            <Surface width={width} height={height}>
                <Node
                    shader={shaders.helloBlue}
                    uniforms={{
                        time: time / 100,
                        resolution: [width, height],
                    }}
                />
            </Surface>
        </Wrapper>
    )
}

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 0.4 },
})

const Wrapper = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0.4,
    animation: `${fadeIn} 1s ease-in-out`,
})

export default Background
