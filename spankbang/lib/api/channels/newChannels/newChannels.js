const base = require('../../base')
const parseResponse = require('../parseResponse')
const PATH = '/channels/'

const newChannels = async ({page = 1}={}) => {
    const request = base.createRequest()
    return parseResponse(base.Channels.New,await request.get(`${PATH}${page}?o=new`))
}
module.exports = newChannels
