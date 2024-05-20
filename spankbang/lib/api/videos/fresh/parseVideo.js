//const base = require('../../base')

function convertToHoursMinutesSeconds(duration) {
    let minutes = parseInt(duration.slice(0, -1))
    let hours = Math.floor(minutes / 60)
    let remainingMinutes = minutes % 60
    let seconds = (minutes * 60) % 60
    // Si las horas son 0, solo devuelve minutos y segundos
    if (hours === 0) {
        return `${remainingMinutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    } else {
        return `${hours}:${remainingMinutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
}
const parseVideo = ($, video) => {
    const $element = $(video)
    const title = $element.find('a.n').text()
    const path = $element.find('a.thumb').attr('href')
    const thumbNail = $element.find('a.thumb picture img').attr('data-src')
    const preview = $element.find('a.thumb picture img').attr('data-preview')
    const time = $element.find('a.thumb .t .l').text()
    const duration = convertToHoursMinutesSeconds(time)
    const stats = $element.find('.stats .v').text().split(' ')
    const views = stats[0]
    const uploadTime = stats.slice(-2).join(' ')

    let videoData = {
        title,
        duration,
        thumbNail,
        preview,
        path,
        views,
        uploadTime
    }
    
    if (videoData.title !== ''){
        return videoData
    }
}


module.exports = parseVideo