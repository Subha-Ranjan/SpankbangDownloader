const cheerio = require('cheerio')
const parseVideo = require('./parseVideo')
const createNextFunction = require('./createNextFunction')
const createPreviousFunction = require('./createPrevious')
const createHasNextFunction = require('./createHasNextFunction')
const createHasPreviousFunction = require('./createHasPreviousFunction')

const getVideos = ($) => {
    return $('#browse_new > div > div > div.video-list.video-rotate.video-list-with-ads > div.video-item')
        .map((i, video) =>
            parseVideo($, video)
        ).get()
}

const getPages = ($,route) => {
    const pages = $('#browse_new > div > div > div.pagination > ul > li:not(.previous):not(.next)')
        .map((i, page) => $(page)
            .find('a')
            .text()
            .trim()
        )
        .filter((i, page) => !isNaN(page))
        .map((i, page) => Number(page))
        .get()
    const current = $('#browse_new > div > div > div.pagination > ul > li.active')
        .find('a').text()
    const page = Number(current)

    
    const next = createNextFunction(page, route)
    const previous = createPreviousFunction(page, route)
    const hasNext = createHasNextFunction({page,pages})
    const hasPrevious = createHasPreviousFunction({page,pages})

    return {
        page,
        pages,
        hasNext: hasNext,
        hasPrevious: hasPrevious,
        next,
        previous,
    }
}
const parseResponse = ({ data }, route) => {
    const $ = cheerio.load(data)
    const videos = getVideos($)
    const pagination = getPages($,route)

    return {
        pagination,
        videos,        
    }
}

module.exports = parseResponse