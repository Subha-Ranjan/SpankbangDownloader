const axios = require('axios')

const BASE_URL = 'https://la.spankbang.com'
const Section = Object.freeze({
    NewVideos: 'new',
    Popular: 'popular',
    Trending: 'trending',
    Upcoming: 'upcoming'
})
const Channels = Object.freeze({
    New: 'new',
    Popular: 'popular',
    Hot: 'hot',
    Name: 'name',

})
const createRequest = (options = {}) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Sec-Ch-Ua-Platform': 'Windows',
            'User-Agent': 'Mozilla/5.0(Windows NT 10.0; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0'
        },
        ...options,
    })
}

const base = {
    BASE_URL,
    createRequest,
    Section,
    Channels
}

module.exports = base