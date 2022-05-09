import React, { ReactNode } from 'react'

interface ExternalLinkProps {
    href: string
    children?: ReactNode
    className?: string
}

export const ExternalLink = ({ href, children, className }: ExternalLinkProps) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className={className}>
            {children}
        </a>
    )
}
