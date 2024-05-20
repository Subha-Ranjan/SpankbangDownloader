const cheerio = require('cheerio')
const parseTags = require('./parseTags')

const getTags = ($,limit,search) => {
    let allTags = $('#main_tags > ul:nth-child(6) li')
        .map((i, tag) =>
            parseTags($, tag)
        ).get()
    if(search){
        allTags = allTags.filter(tag => tag.includes(search))
    }
    if (limit === 0) {
        return allTags
    }else{
        return allTags.slice(0,limit)
    }
}

const parseResponse = (limit, search, { data }) => {
    const $ = cheerio.load(data)
    const tags = getTags($,limit,search)
    return {
        tags
    }
}
module.exports = parseResponse