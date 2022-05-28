import { fetchPinnedRepositories } from './queries/pinnedRepositoriesQuery'

export interface PinnedRepository {
    id: string
    name: string
    description: string
    url: string
    stargazerCount: number
    repositoryTopics: RepositoryTopic[]
}

interface RepositoryTopic {
    id: string
    name: string
}

export const getPinnedRepositories = async (
    count: number,
): Promise<PinnedRepository[]> => {
    const response = await fetchPinnedRepositories(count)

    return response.user.pinnedItems.nodes.map((pinnedRepository) => ({
        id: pinnedRepository.id,
        name: pinnedRepository.name,
        description: pinnedRepository.description,
        url: pinnedRepository.url,
        stargazerCount: pinnedRepository.stargazerCount,
        repositoryTopics: pinnedRepository.repositoryTopics.edges.map((edge) => ({
            id: edge.node.topic.id,
            name: edge.node.topic.name,
        })),
    }))
}
