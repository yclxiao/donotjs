export const addTodo = (text) => {
    return {
        type: 'ADD_TODOS',
        text,
        complete: false
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const filterVisible = (filter) => {
    return {
        type: 'FILTER_VISIBLE',
        filter
    }
}