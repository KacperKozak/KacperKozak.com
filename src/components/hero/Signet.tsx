import React, { forwardRef } from 'react'

export const Signet = forwardRef<SVGPathElement>(({}, ref) => {
    return (
        <svg width="110" height="95" viewBox="0 0 110 95" fill="none">
            <path
                ref={ref}
                d="M48.3781 81.6484L45.0717 75.9937L41.7653 70.3389L28.5396 47.7197L15.314 25.1006L8.70115 13.791L2.08833 2.48146L57.3288 2.48146M48.3781 81.6484L94.6679 2.48146H101.281H107.894L101.281 13.791L94.6679 25.1006L81.4423 47.7197L68.2166 70.3389L64.9102 75.9937L61.6038 81.6484L54.9909 92.958L51.6845 87.3032L48.3781 81.6484Z"
                stroke="#E5E8F4"
                strokeWidth="3.01123"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="230"
                strokeDashoffset="230"
            />
        </svg>
    )
})
