const parseMoreVideos = ($, video) => {
    const $data = $(video)
    const title = $data.find('.n').text()
    const thumbNail = $data.find('a picture img').attr('data-src')
    const preview = $data.find('a picture img').attr('data-preview')
    const path = $data.find('.n').attr('href')
    const duration = $data.find('a .t .l').text()
    const stats = $data.find('.stats .v').text().split(' ')
    const views = stats[0]
    const uploadTime = stats.slice(-2).join(' ')
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
module.exports = parseMoreVideos