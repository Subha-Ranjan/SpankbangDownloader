const cheerio = require('cheerio')
const parseChannel = require('./parseChannel')
const createNextFunction = require('./createNextFunction')
const createPreviousFunction = require('./createPreviousFunction')
const createHasNextFunction = require('./createHasNextFunction')
const createHasPreviousFunction = require('./createHasPreviousFunction')

const getChannels = ($) => {
    return $('#browse_new > ul > li')
        .map((i, channel) =>
            parseChannel($, channel)
        ).get()
}

const getPages = ($, route) => {
    const pages = $('#browse_new > div > ul > li:not(.previous):not(.next):not(.disable)')
        .map((i, page) => $(page)
            .find('a')
            .text()
            .trim()
        )
        .filter((i, page) => !isNaN(page))
        .map((i, page) => Number(page))
        .get()
    const current = $('#browse_new > div > ul > li.active')
        .find('a').text()
    const page = Number(current)
    const next = createNextFunction(page, route)
    const previous = createPreviousFunction(page, route)
    const hasNext = createHasNextFunction({ page, pages })
    const hasPrevious = createHasPreviousFunction({ page, pages })

    return {
        page,
        pages,
        next,
        previous,
        hasNext,
        hasPrevious
    }
}
const parseResponse = (route, { data }) => {
    const $ = cheerio.load(data)
    const channels = getChannels($)
    const pagination = getPages($, route)
    return {
        pagination,
        channels,
    }
}

module.exports = parseResponse