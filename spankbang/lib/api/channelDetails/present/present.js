const base = require('../../base')
const parseResponse = require('../parseResponse')
const present = async ({path = '', page = 1}={})=>{
    if (path != '') {
        try {
            const request = base.createRequest()
            return parseResponse(await request.get(`${path}${page}/`))
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return {'error':'path empty'}
    }
}

module.exports = present
