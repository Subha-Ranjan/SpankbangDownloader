const base = require('../../../base')
const parseResponse = require('../parseResponse')
const PATH = '/most_popular/'


const popular = async ({ page = 1 } = {}) => {
    try {
        const request = base.createRequest()
        return parseResponse(
            await request.get(`${PATH}${page}/`),
            base.Section.Popular
        )
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = popular