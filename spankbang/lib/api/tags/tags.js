const base = require('../base')
const parseTags = require('./parseResponse')


const tags = async ({limit = 0, search =''}={}) =>{
    const PATH = '/tags'
    const request = base.createRequest()
    return parseTags(limit,search,await request.get(PATH))
}
module.exports = tags