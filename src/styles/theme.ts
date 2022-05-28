import { darken, transparentize } from 'polished'

export const white = '#E5E8F4'
export const muted = darken(0.1, white)

export const borderColor = transparentize(0.9, white)
export const border = `1px solid ${borderColor}`
export const borderStrong = `1px solid ${white}`

export const isMobile = '@media (max-width: 768px)'
