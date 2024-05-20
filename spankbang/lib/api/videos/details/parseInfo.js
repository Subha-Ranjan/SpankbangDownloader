const parseInfo = (info) => {
    const json = JSON.parse(info)
    const title = json.name
    const description = json.description
    const thumbNail = json.thumbnailUrl
    return{
        title,
        description,
        thumbNail
    }
}

module.exports = parseInfo