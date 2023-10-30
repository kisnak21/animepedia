export const getAnimeRes = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json()
    return anime
}

export const getMangaRes = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json()
    return anime
}

export const getNestedRes = async (resource, objectProperty) => {
    const response = await getAnimeRes(resource)
    return response.data.flatMap(item => item.entry)
}