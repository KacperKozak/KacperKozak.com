import { client } from 'data/client'
import { gql } from 'graphql-request'

export interface PinnedRepositoriesDTO {
    user: {
        pinnedItems: {
            nodes: PinnedRepositoryDTO[]
        }
    }
}

interface PinnedRepositoryDTO {
    id: string
    name: string
    description: string
    stargazerCount: number
    url: string
    repositoryTopics: {
        edges: RepositoryTopicsDTO[]
    }
}

interface RepositoryTopicsDTO {
    node: {
        topic: {
            id: string
            name: string
        }
    }
}

const pinnedRepositoriesQuery = gql`
    query PinnedRepositories($count: Int!) {
        user(login: "KacperKozak") {
            pinnedItems(first: $count, types: REPOSITORY) {
                nodes {
                    ... on Repository {
                        id
                        name
                        description
                        url
                        stargazerCount
                        repositoryTopics(first: 10) {
                            edges {
                                node {
                                    topic {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export const fetchPinnedRepositories = (count: number) => {
    return client.request<PinnedRepositoriesDTO>(pinnedRepositoriesQuery, { count })
}
