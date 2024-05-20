const base = require('../../../base')
const parseResponse = require('../parseResponse')
const PATH = '/trending_videos/'
const trending = async ({ page = 1 } = {}) => {
    try {
        const request = base.createRequest()
        return parseResponse(await request.get(`${PATH}${page}/`),base.Section.Trending)
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = trending