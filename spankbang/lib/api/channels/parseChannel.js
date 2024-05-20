const parseChannel = ($,channel) =>{
    const data = $(channel)
    const path = data.find('a.image').attr('href')
    const thumbNail = data.find('a.image img').attr('src')
    const name = data.find('.title').text()
    return{
        path,
        thumbNail,
        name
    }
}
module.exports = parseChannel