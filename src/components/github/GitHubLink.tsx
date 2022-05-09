import styled from '@emotion/styled'
import { ExternalLink } from 'components/buttons/ExternalLink'
import { Icon } from 'components/icon/Icon'
import React from 'react'
import { border, muted, white } from 'styles/theme'
import { Repository } from 'types/data'
import { githubUrl } from 'utils/url'

interface GitHubLinkProps {
    repository: Repository
}

export const GitHubLink = ({
    repository: { title, description, tags, url },
}: GitHubLinkProps) => {
    return (
        <article>
            <Header>
                <HeaderLink href={githubUrl(url)}>
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
        </article>
    )
}

const margins = '20px'

const Header = styled.header({
    display: 'flex',
    flexDirection: 'column',
    borderBottom: border,
})

const HeaderLink = styled(ExternalLink)({
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
})

const Tag = styled.li({
    color: muted,
    fontSize: '12px',
})
