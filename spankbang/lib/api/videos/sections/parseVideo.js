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
    const data = $(video)
    const path = data.find('a').attr('href')
    const thumbNail = data.find('a img').attr('data-src')
    const preview = data.find('a img').attr('data-preview')
    const title = data.find('a.n').text()
    const time = data.find('p.t span.l').text()
    const duration = convertToHoursMinutesSeconds(time)
    const stats = data.find('.stats .v').text().split(' ')
    const views = stats[0]
    const uploadTime = stats.slice(-2).join(' ')
    if (path) {
        return {
            title,
            duration,
            thumbNail,
            preview,
            path,
            views,
            uploadTime
        }
    }
}
module.exports = parseVideo
