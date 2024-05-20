const cheerio = require('cheerio')
const parsePstar = require('./parsePstar')
const parsePages = require('./parsePages')
const createHasNextFunction = require('./createHasNextFunction')
const createHasPreviousFunction = require('./createHasPrevious')

const getPstars = ($, page) => {
    const list = page == 1 ? 'ul:nth-child(5)' : 'ul'
    return $(`#pornstars > ${list} > li`)
        .map((i, pstar) =>
            parsePstar($, pstar)
        ).get()
}
const getPagination = ($, page) => {
    const pages =  $('#pornstars > div > ul > li:not(.previous):not(.disabled):not(.next)')
        .map((i, pages) =>
            parsePages($, pages)
        ).get()
    return {
        page,
        pages
    }
}
const parseResponse = (page, { data }) => {
    const $ = cheerio.load(data)
    const pStars = getPstars($, page)
    const pagination = getPagination($, page)
    return {
        pagination,
        hasNext: createHasNextFunction(pagination),
        hasPrevious: createHasPreviousFunction(pagination),
        pStars
    }
}
module.exports = parseResponse