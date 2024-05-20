const cheerio = require('cheerio')
const parseVideo = require('../fresh/parseVideo')
const createHasNextFunction = require('./createHasNextFunction')
const createHasPreviousFunction = require('./createHasPreviousFunction')

const getVideos = ($) => {
    return $('#browse_new > div > div > div.video-list > div.video-item').map((i, video) =>
        parseVideo($, video)
    ).get()
}
const getPagination = ($) => {
    const pagesData = $('#browse_new > div > div > nav > span').text()
    const parts = pagesData.split(' ')
    const page = parseInt(parts[1])
    const pages = parseInt(parts[3])
    return {
        page,
        pages,
        hasNext: createHasNextFunction({page,pages}),
        hasPrevious: createHasPreviousFunction({ page, pages }),
    }
}

const parseResponse = (page, { data }) => {
    const $ = cheerio.load(data)
    const results = getVideos($)
    const pagination = getPagination($)
    return {
        pagination,
       
        results
    }
}

module.exports = parseResponse