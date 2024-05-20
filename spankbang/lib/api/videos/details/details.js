const parseResponse = require('./parseResponse')
const base = require('../../base')

const details = async ({url = ''}= {})=>{
    try {
        const request = base.createRequest()
        return parseResponse(await request.get(`${url}`))
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = details