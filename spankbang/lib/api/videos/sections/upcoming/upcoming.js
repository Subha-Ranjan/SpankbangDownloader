const base = require('../../../base')
const parseResponse = require('../parseResponse')
const PATH = '/upcoming/'

const upcoming = async ({ page = 1 } = {}) => {
    try {
        const request = base.createRequest()
        return parseResponse(await request.get(`${PATH}${page}/`),base.Section.Upcoming)
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = upcoming