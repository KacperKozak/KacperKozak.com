import styled from '@emotion/styled'
import { ExternalLink } from 'components/buttons/ExternalLink'
import { Icon } from 'components/icon/Icon'
import { PinnedRepository } from 'data/repositories'
import React from 'react'
import { border, muted, white } from 'styles/theme'

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

const margins = '20px'

const Header = styled.header({
    display: 'flex',
    flexDirection: 'column',
    borderBottom: border,
    transition: 'all 0.1s ease',
})

const HeaderLink = styled.div({
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
    padding: `${margins} 0`,
})

const Title = styled.h3({
    margin: 0,
    flex: 1,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: 1.2,
})

const Description = styled.p({
    minHeight: 120,
    padding: `${margins} 0`,
    margin: 0,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: 1.5,
})

const Tags = styled.ul({
    margin: 0,
    padding: 0,
    paddingTop: 10,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 16,
    borderTop: border,
    transition: 'all 0.12s ease-out',
})

const Tag = styled.li({
    color: muted,
    fontSize: '12px',
})

const Container = styled(ExternalLink)({
    textDecoration: 'none',
    [`&:hover ${Header}, &:hover ${Tags}`]: {
        borderColor: white,
    },
})
