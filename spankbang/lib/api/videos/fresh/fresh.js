const base = require('../../base')
const parseResponse = require('./parseResponse')

const fresh = async () => {
    try {
        const request = base.createRequest()
        return parseResponse(await request.get())
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = fresh