const cheerio = require('cheerio')
const parsePstar = require('./parsePStars')

const getPstars = ($, limit, search) => {
    let allPStars = $('#pornstars_alphabet > ul.list > li')
        .map((i, pstar) =>
            parsePstar($, pstar)
        ).get()
    if (search) {
        let capitalizeSearch = search.charAt(0).toUpperCase() + search.slice(1)
        allPStars = allPStars.filter(pstar => pstar.name.includes(capitalizeSearch))
        if (limit === 0) {
            return allPStars
        } else {
            return allPStars.slice(0, limit)
        }
    }
}
const parseResponse = (limit, search, { data }) => {
    const $ = cheerio.load(data)
    const pStars = getPstars($, limit, search)
    return {
        pStars
    }
}
module.exports = parseResponse