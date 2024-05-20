const previousFunction = (currentPage, route) => () => {
    const trending = require('./hot')
    const hot = require('./hot')
    const popular = require('./popular')
    const name = require('./name')
    const page = currentPage - 1
    switch (route) {
        case 'new':
            return trending({ page })
        case 'hot':
            return hot({ page })
        case 'popular':
            return popular({ page })
        case 'name':
            return name({ page })
    }
}

const createPreviousFunction = (page, route) => {
    return previousFunction(page, route)
}

module.exports = createPreviousFunction