import styled from '@emotion/styled'
import { Background } from 'components/bg/Background'
import { ExternalLink } from 'components/buttons/ExternalLink'
import { Icon } from 'components/icon/Icon'
import { PinnedRepository } from 'data/repositories'
import React from 'react'
import {
    border,
    borderColor,
    borderStrong,
    borderStrongColor,
    muted,
    transition,
    primary,
    secondary,
    bg,
    bgStrong,
} from 'styles/theme'

interface GitHubLinkProps {
    repository: PinnedRepository
}

export const GitHubLink = ({
    repository: { name, description, url, repositoryTopics, stargazerCount },
}: GitHubLinkProps) => {
    return (
        <Container href={url}>
            <Header title={`Stars: ${stargazerCount}`}>
                <HeaderLink>
                    <Icon name="GitHub" />
                    <Title>{name}</Title>
                    <Icon name="ChevronRight" />
                </HeaderLink>
            </Header>

            <Description>{description}</Description>

            <Tags>
                {repositoryTopics.map((topic) => (
                    <Tag key={topic.id}>{topic.name}</Tag>
                ))}
            </Tags>
        </Container>
    )
}

const Header = styled.header({
    padding: '16px 12px',
    display: 'flex',
    flexDirection: 'column',
    borderBottom: border,
    transition,
})

const HeaderLink = styled.div({
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
})

const Title = styled.h3({
    margin: 0,
    flex: 1,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: 1.2,
})

const Description = styled.p({
    minHeight: 120,
    padding: '8px 12px',
    margin: 0,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.5,
    color: secondary,
})

const Tags = styled.ul({
    margin: 0,
    padding: '8px 12px',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 16,
    rowGap: 4,
    borderTop: border,
    transition,
})

const Tag = styled.li({
    opacity: 0.8,
    fontSize: '12px',
})

const Container = styled(ExternalLink)({
    backgroundColor: bg,
    border: border,
    borderRadius: 8,
    textDecoration: 'none',
    transition,
    '&:hover': {
        backgroundColor: bgStrong,
        borderColor: borderStrongColor,
    },
    [`&:hover ${Header}, &:hover ${Tags}`]: {
        borderColor: borderStrongColor,
    },
})
