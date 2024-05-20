
const parsePstar = ($,pstar) =>{
    const $data = $(pstar)
    const path = $data.find('a').attr('href')
    const thumbNail = $data.find('a img').attr('src')
    const name = $data.find('a img').attr('title')
    const views = $data.find('a .views').text().trim()
    const videos = $data.find('a .videos').text().trim()
    return{
        name,
        path,
        thumbNail,
        views,
        videos
    }
}
module.exports = parsePstar