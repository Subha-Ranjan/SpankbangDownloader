const cheerio = require('cheerio')
const parseVideo = require('./parseVideo')
const parseInfo = require('./parseInfo')
const parseDuration = require('./parseDuration')
const parseTimeline = require('./perseTimeline')
const parseMoreVideos = require('./parseMoreVideos')
const parsePositions = require('./parsePositons')


const getVideoData = ($) => {
    const data = $('#container script:nth-child(1)').html()
    const info = $('#container script:nth-child(2)').html()
    const profile = $('#video > div.left > ul >li.us > a').text().trim()
    const count = $('#video > div.left > ul > li.us > span:nth-child(2) > em').text()
    const path = $('#video > div.left > ul > li.us > a').attr('href')
    const video = parseVideo(data)
    const videoInformation = parseInfo(info)
    const duration = parseDuration($)

    return {
        video,
        videoInformation,
        duration,
        profile:{
            name: profile,
            count: count,
            path: path,
        }
    }
}
const getTimeLine = ($) => {
    const timeline = $('#video > div.left > section.timeline > div')
        .map((i, time) =>
            parseTimeline($, time)
        ).get()
    const positions = $('#video > div.left > ul.positions > li.p')
        .map((i, position) =>
            parsePositions($, position)
        ).get()
    return {
        positions,
        timeline,
    }
}
const getMoreVideos = ($) => {
    const videos = $('#video > div.right > div.similar > div.video-list > div.video-item')
        .map((i, video) => {
            return parseMoreVideos($, video)
        }).get()
    videos.pop()
    return videos
}

const parseResponse = ({ data }) => {
    const $ = cheerio.load(data)
    const information = getVideoData($)
    const timeline = getTimeLine($)
    const videos = getMoreVideos($)
    return {
        name: information.videoInformation.title,
        description: information.videoInformation.description,
        duration: information.duration,
        profile: information.profile,
        thumbNail: information.videoInformation.thumbNail,
        tags: information.video.tags,
        timeline,
        files: information.video.files,
        videos
    }
}


module.exports = parseResponse