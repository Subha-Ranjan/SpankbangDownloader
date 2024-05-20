const cheerio = require('cheerio')
const parseVideo = require('../videos/fresh/parseVideo')
const createHasNextFunction = require('./createHasNextFunction')
const createHasPreviousFunction = require('./createHasPreviousFunction')



const getVideos = ($) => {
    return $('#browse_new > div > div > div.video-list.video-rotate.video-list-with-ads > div.video-item')
        .map((i, video) =>
            parseVideo($, video)
        ).get()
}

const getPages = ($) => {
    const pages = $('#browse_new > div > div > div.pagination > ul > li:not(.previous):not(.next):not(.disabled)')
        .map((i, page) =>
            $(page)
                .find('a')
                .text()
                .trim()
        )
        .filter((i, page) => !isNaN(page))
        .map((i, page) => Number(page))
        .get()

    const current = $('#browse_new > div > div > div.pagination > ul > li.active')
        .find('a')
        .text()
    const page = Number(current)
    const hasNext = createHasNextFunction({page,pages})
    const hasPrevious = createHasPreviousFunction({page,pages})
    return {
        page,
        pages,
        hasNext, hasPrevious
    }
}
const getCreatedBy = ($) =>{
    const name = $('#browse_new > ul > li.i > span.parent > a').text()
    const path = $('#browse_new > ul > li.i > span.parent > a').attr('href')
    return{
        name,
        path
    }
}
const parseResponse = ({ data }) => {
    const $ = cheerio.load(data)
    const name = $('#browse_new > ul > li.i > h1 > em').text()
    const thumbNail = $('#browse_new > ul > li.p > img').attr('src')
    const createdBy = getCreatedBy($)
    const videos = getVideos($)
    const pagination = getPages($)
    return {
        name,
        createdBy,
        thumbNail,
        pagination,
        videos
    }
}

module.exports = parseResponse
