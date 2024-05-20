
const parseVideo = (video) => {
    var fileRegex = /var stream_data\s*=\s*\{.*?\};/s
    const fileData = video.match(fileRegex)[0]

    const jsonData = fileData.replace('var stream_data = ', '').slice(0, -1).trim()
    const jsonDataDoubleQuotes = jsonData.replace(/'/g, '"')
    const json = JSON.parse(jsonDataDoubleQuotes)

    var tagsRegex = /var\s+live_keywords\s*=\s*(.*?);/
    const fileTags = video.match(tagsRegex)[0]
    const tagJsonData = fileTags.replace('var live_keywords =', '').slice(0, -1).trim()
    const tags = tagJsonData.split(',').map(word => word.trim().replace(/'/g, ''))
    if (tags[tags.length - 1] === '') {
        tags.pop()
    }
    let files = [
        {
            'quality':'240p',
            'url': json['240p'][0] ?? ''
        },
        {

            'quality':'480p',
            'url': json['480p'][0] ?? '',
        },
        {
            'quality':'720p',
            'url': json['720p'][0] ?? '',
        },
        {
            'quality':'1080p',
            'url': json['1080p'][0] ?? '',
        },
        {
            'quality':'4k',
            'url': json['4k'][0] ?? '',
        },
        {
            'quality': 'hls',
            'url': json['m3u8'][0] ?? '',
        }
       
    ]
    

    return{
        tags,
        files
    } 
}

module.exports = parseVideo