export const setSortBy = (value: string) => ({
    type: 'SET_SORT_BY',
    payload: value
})

export const setCategory = (catIndex: string) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})