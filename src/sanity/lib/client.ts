import { createClient } from 'next-sanity'

// Hardcoded values to avoid Vercel env var issues
export const projectId = '36wenybq'
export const dataset = 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})
