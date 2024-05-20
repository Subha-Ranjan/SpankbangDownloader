const parsePstar = ($,pStars)=>{
    const data = $(pStars)
    const path = data.find('a').attr('href')
    const name = data.find('a').contents().first().text().trim()
    const videos = data.find('a span').text().trim()
    return{
        name,
        path,
        videos,
    }
}

module.exports = parsePstar