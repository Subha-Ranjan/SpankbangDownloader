const cherrio = require('cheerio')
const parseVideo = require('../videos/fresh/parseVideo')
const hasNextFunction = require('../channelDetails/createHasNextFunction')
const hasPreviousFunction = require('../channelDetails/createHasPreviousFunction')

const getName = ($) => {
    const data = $('.listing_page')
    const name = data.find('.top .i h1 em').text()
    const flag = data.find('.top .i .info img').attr('src')
    const image = data.find('.top .p img').attr('src')
    const count = data.find('.results .top a:nth-child(3) span').text()
    return {
        name,
        flag: `https:${flag}`,
        image: `https:${image}`,
        count,
    }
}
const getPagination = ($) => {
    const data = $('#browse_new')
    const pagination = data.find('.pagination ul li:not(.previous):not(.disabled):not(.next)')
    let page = data.find('.pagination ul li.active').text()
    if (page == '') {
        page = 1
    }
    const pages = pagination.map(
        (i, page) => $(page).text()
    ).get()

    let hasNext = hasNextFunction({ page, pages })
    let hasPrevious = hasPreviousFunction({ page, pages })

    return {
        page,
        pages,
        hasNext,
        hasPrevious,
    }
}

const getVideos = ($) => {
    return $('.video-list .video-item').map(
        (i, video) => parseVideo($, video)
    ).get()
}

const parseResponse = ({ data }) => {
    const $ = cherrio.load(data)
    const profile = getName($)
    const videos = getVideos($)
    const pagination = getPagination($)

    return {
        pagination,
        name: profile.name,
        flag: profile.flag,
        thumbNail: profile.image,
        count:profile.count,
        videos,
    }
}
module.exports = parseResponse