import { createImageUrlBuilder } from '@sanity/image-url'

const imageBuilder = createImageUrlBuilder({
    projectId: '36wenybq',
    dataset: 'production',
})

export const urlForImage = (source: any) => {
    if (!source) return null
    return imageBuilder.image(source)
}
