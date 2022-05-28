import { GraphQLClient } from 'graphql-request'

const { GITHUB_API_URL, GITHUB_TOKEN } = process.env

if (!GITHUB_API_URL) {
    throw new Error('GITHUB_API_URL is not defined')
}

if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is not defined')
}

export const client = new GraphQLClient(GITHUB_API_URL, {
    headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
})
