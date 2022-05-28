import styled from '@emotion/styled'
import { ExternalLink } from 'components/buttons/ExternalLink'
import { Icon } from 'components/icon/Icon'
import React from 'react'
import { border, borderStrong, muted, white } from 'styles/theme'
import { Repository } from 'types/data'
import { githubUrl } from 'utils/url'

interface GitHubLinkProps {
    repository: Repository
}

export const GitHubLink = ({
    repository: { title, description, tags, url },
}: GitHubLinkProps) => {
    return (
        <Container href={githubUrl(url)}>
            <Header>
                <HeaderLink>
                    <Icon name="GitHub" />
                    <Title>{title}</Title>
                    <Icon name="ChevronRight" />
                </HeaderLink>
            </Header>

            <Description>{description}</Description>

            <Tags>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
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
