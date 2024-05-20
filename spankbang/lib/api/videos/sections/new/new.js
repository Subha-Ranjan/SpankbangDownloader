const base = require('../../../base')
const parseResponse = require('../parseResponse')
const PATH ='/new_videos/'


const newVideos = async ({ page = 1 } = {}) => {
    try {
        const request = base.createRequest()
        return parseResponse(
            await request.get(`${PATH}${page}/`),
            base.Section.NewVideos
        )
    } catch (error) {
        throw Error(error)
    }
}
module.exports = newVideos