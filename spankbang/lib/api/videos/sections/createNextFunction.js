
const nextFunction = (currentPage, route) => () => {
    const newVideos = require('./new')
    const popular = require('./popular')
    const trending = require('./trending')
    const upcoming = require('./upcoming')
    const page = currentPage + 1
    switch (route) {
        case 'new':
            return newVideos({ page })
        case 'popular':
            return popular({ page })
        case 'trending':
            return trending({ page })
        case 'upcoming':
            return upcoming({ page })
    }


}

const createNextFunction = (page, route) => {
    return nextFunction(page, route)
}
module.exports = createNextFunction