const cheerio = require('cheerio')
const parseVideo = require('./parseVideo')


const getVideos = ($, index) => {
    const data = $(`#home > div.videos > div.video-list:nth-child(${index}) .video-item`)
        .map((i, video) => parseVideo($, video))
        .get()
    data.pop()
    return data
}

const getFavorites = ($) => getVideos($, 1)
const getUpcoming = ($) => getVideos($, 7)
const getTrending = ($) => getVideos($, 14)
const getMoreVideos = ($) => getVideos($, 17)

const parseResponse = ({ data }) => {
    const $ = cheerio.load(data)
    const favorites = getFavorites($)
    const upcoming = getUpcoming($)
    const trending = getTrending($)
    const moreVideos = getMoreVideos($)

    return {
        favorites,
        upcoming,
        trending,
        moreVideos,
    }
}

module.exports = parseResponse