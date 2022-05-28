import styled from '@emotion/styled'
import { Node } from 'gl-react'
import { Surface } from 'gl-react-dom'
import { useTime } from 'hooks/useTime'
import React, { forwardRef, useMemo } from 'react'
import { shaders } from './shaders'

interface BackgroundProps {
    enabled: boolean
}

export const Background = forwardRef<HTMLDivElement, BackgroundProps>(
    ({ enabled }, ref) => {
        const time = useTime(enabled)

        const width = window?.innerWidth
        const height = window?.innerHeight

        return (
            <Wrapper ref={ref}>
                <Surface width={width} height={height}>
                    <Node
                        shader={shaders.background}
                        uniforms={{
                            time: time / 100,
                            resolution: [width, height],
                        }}
                    />
                </Surface>
            </Wrapper>
        )
    },
)

const Wrapper = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0,
})
